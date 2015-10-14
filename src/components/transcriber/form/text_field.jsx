import React from 'react';
import { css } from 'constants/css';

export default class TextField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props;
        return (
            <input type="text" style={style}
               name={field.name}
               onFocus={() => onFieldFocus(field.name)}
               onChange={(e) => onFieldChange(field.name, e.target.value)}
               placeholder={field.placeholder}/>
        );
    }
}

const style = {
    borderRadius: css.radius,
    padding: '2px 4px',
    width: '100%',
};
