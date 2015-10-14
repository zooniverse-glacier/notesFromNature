import React from 'react';
import { css } from 'constants/css';

export default class IdentificationField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            latitudeName = field.name + 'Latitude',
            longitudeName = field.name + 'Longitude';
        return (
            <div>
                <label style={css.formLabel} className="dragHandle">{field.label}:</label>

            </div>
        );
    }
}

const style = {
    select: {
        borderEadius: css.radius,
        color: css.black,
        padding: '2px 4px',
        width: '33.33%',
    },
};
