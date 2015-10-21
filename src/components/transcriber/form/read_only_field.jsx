import React from 'react';
import { css } from 'constants/css';

export default class ReadOnlyField extends React.Component {
    render() {
        const { field, subject } = this.props,
            defaultValue = field.defaultValue(subject),
            style = {
                borderRadius: css.radius,
                padding: '2px 4px',
                width: field.width || '100%',
            };
        return (
            <input type="text" style={style} value={defaultValue}
                disabled="disabled" />
        );
    }
}
