import React from 'react';
import { css } from 'constants/css';

export default class Label extends React.Component {
    render() {
        const { field } = this.props;
        return (
            <label style={style} className="dragHandle">{field.label + ':'}</label>
        );
    }
}

const style = {
    color: css.white,
    cursor: 'move',
    fontWeight: 500,
    margin: '5px 0 0 6px',
    width: '100%',
};
