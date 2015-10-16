import React from 'react';
import ReactDOM from "react-dom";
import { css } from 'constants/css';
import Draggable from 'react-draggable';
import FormHelp from 'components/transcriber/form/help';

import Label from 'components/transcriber/form/label';
import DateField from 'components/transcriber/form/date_field';
import DepthField from 'components/transcriber/form/depth_field';
import GeographicCoordinatesField from 'components/transcriber/form/geographic_coordinates_field';
import TextField from 'components/transcriber/form/text_field';
import IdentificationField from 'components/transcriber/form/identification_field';

const fieldTypes = {
    Label: Label,
    DateField: DateField,
    DepthField: DepthField,
    GeographicCoordinatesField: GeographicCoordinatesField,
    IdentificationField: IdentificationField,
    TextField: TextField,
};

export default class Form extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs[this.props.focused]).focus();
    }
    componentDidUpdate() {
        ReactDOM.findDOMNode(this.refs[this.props.focused]).focus();
    }
    render() {
        const { onSubmit, onSkip, onFieldFocus, onFieldChange, onToggleHelp,
                focused, fields, helpExpanded } = this.props;
        const movePadding = 240,
            moveLeft = -window.innerWidth + movePadding,
            moveRight = movePadding,
            moveTop = -movePadding,
            moveBottom = window.innerHeight - movePadding;
        const helps = fields.map((field, i) => {
            if (field.name == focused) {
                return (
                    field.type == 'Label' ?
                        <Label field={field} /> :
                        <FormHelp key={i} field={field} helpExpanded={helpExpanded}
                            onToggleHelp={onToggleHelp}/>
                );
            }
        });
        const inputs = fields.map((field, i) => {
            return React.createElement(fieldTypes[field.type],
                {key: i, field: field, ref: field.name,
                    onFieldChange: onFieldChange,
                    onFieldFocus: onFieldFocus});
        });
        return (
            <Draggable handle=".dragHandle" bounds={{left: moveLeft, right: moveRight, top: moveTop, bottom: moveBottom}}>
                <div style={style.container}>
                    <div style={style.discussButton}>
                        <a target="_blank" tabIndex="-1" style={style.link}>Discuss</a>
                    </div>
                    <div style={style.skipButton}>
                        <a tabIndex="-1" style={style.link}>Skip Record</a>
                    </div>
                    <div style={style.help}>
                        {helps}
                    </div>
                    <form style={style.form} onSubmit={e => this.handleSubmit(e)}>
                        {inputs}
                        <input style={style.submitButton} type="submit"
                            value="Finish This Record" />
                    </form>
                </div>
            </Draggable>
        );
    }
}

const style = {
    container: {
        background: css.transparent,
        border: css.canvasBorder,
        borderRadius: css.radius,
        fontFamily: '"Open Sans", sans-serif',
        height: 'auto',
        padding: 4,
        position: 'absolute',
        right: 10,
        top: 160,
        width: '24em',
        zIndex: 2,
    },
    form: {
        borderTop: `1px solid ${css.gray}`,
        paddingTop: 6,
    },
    floatingButton: {
        background: css.transparent,
        border: css.canvasBorder,
        borderRadius: css.buttonRadius,
        color: css.white,
        cursor: 'default',
        padding: '4px 8px 4px 8px',
        position: 'absolute',
        top: -35,
    },
    link: {
        color: css.white,
    },
    submitButton: {
        backgroundColor: css.orange,
        border: `1px solid ${css.black}`,
        borderRadius: css.radius,
        color: css.white,
        width: '100%',
    },
    help: {
        color: css.white,
        cursor: 'move',
        padding: 4,
    }
};
style.discussButton = Object.assign({left: 0}, style.floatingButton);
style.skipButton = Object.assign({right: 0}, style.floatingButton);
