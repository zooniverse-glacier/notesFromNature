import React from 'react';
import { css } from 'constants/css';

export default class DepthField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            numberName = field.name + 'Number',
            unitsName = field.name + 'Units';
        return (
            <div>
                <label style={css.formLabel} className="dragHandle">{field.label}</label>
                <input type="text" style={style.text}
                    name={numberName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => onFieldChange(numberName, e.target.value)}
                    placeholder={field.placeholder}/>
               <select name={unitsName} style={style.select}
                   onChange={(e) => onFieldChange(unitsName, e.target.value)}
                   onFocus={() => onFieldFocus(field.name)}>
                   <option key={-1} value={""}>-- Depth Units --</option>
                   <option key={0} value={""}>No Units</option>
                   <option key={1} value={"feet"}>feet</option>
                   <option key={2} value={"meters"}>meters</option>
                   <option key={3} value={"fathoms"}>fathoms</option>
               </select>
            </div>
        );
    }
}

const style = {
    text: {
        borderRadius: css.radius,
        padding: '2px 4px',
        width: '50%',
    },
    select:  Object.assign({width: '50%'}, css.formSelectControl),
};
