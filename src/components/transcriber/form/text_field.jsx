import React from 'react';
import { css } from 'constants/css';

export default class TextField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            placeholder = field.placeholder || `-- ${field.label} --`,
            maxLength = field.maxLength || 256,
            style = {
                borderRadius: css.radius,
                padding: '2px 4px',
                width: field.width || '100%',
            };
        return (
            <input type="text" style={style}
               name={field.name}
               maxLength={maxLength}
               onFocus={() => onFieldFocus(field.name)}
               onChange={(e) => onFieldChange(field.name, e.target.value)}
               placeholder={placeholder}/>
        );
    }
}
