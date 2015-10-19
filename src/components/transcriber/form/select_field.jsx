import React from 'react';
import { css } from 'constants/css';

export default class SelectField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            placeholder = field.placeholder || `-- ${field.label} --`,
            maxLength = field.maxLength || 256,
            style = {
                borderRadius: css.radius,
                color: css.black,
                padding: '3px',
                width: field.width || '100%',
            };
            let options = field.options.map((option, i) => {
                return (<option key={i} value={option.value}>{option.label}</option>);
            });
            options.unshift(
                <option key="-1" value="" disabled>{placeholder}</option>
            );
        return (
            <select name={field.name} style={style} defaultValue={''}
               onChange={(e) => onFieldChange(field.name, e.target.value)}
               onFocus={() => onFieldFocus(field.name)}>
               {options}
            </select>
        );
    }
}
