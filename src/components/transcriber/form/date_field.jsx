import React from 'react';
import { css } from 'constants/css';

export default class DateField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            monthName = field.name + 'Month',
            dayName = field.name + 'Day',
            yearName = field.name + 'Year';
        let dayOptions = [],
            yearOptions = [];
        for (let d = 1; d <= 31; ++d) {
            let day = ('0' + d).substr(-2);
            dayOptions.push(<option key={d} value={day}>{day}</option>);
        }
        for (let y = (new Date()).getFullYear(); y >= 1830; --y) {
            yearOptions.push(<option key={y} value={y}>{y}</option>);
        }
        return (
            <div>
                <label style={css.formLabel} className="dragHandle">{field.label}</label>
                <select name={monthName} style={style.select}
                    onChange={(e) => onFieldChange(monthName, e.target.value)}
                    onFocus={() => onFieldFocus(field.name)}>
                    <option key={-1} value={""}>-- Month --</option>
                    <option key={0} value={"00"}>Not Shown</option>
                    <option key={1} value={"01"}>01 - January - I</option>
                    <option key={2} value={"02"}>02 - February - II</option>
                    <option key={3} value={"03"}>03 - March - III</option>
                    <option key={4} value={"04"}>04 - April - IV</option>
                    <option key={5} value={"05"}>05 - May - V</option>
                    <option key={6} value={"06"}>06 - June - VI</option>
                    <option key={7} value={"07"}>07 - July - VII</option>
                    <option key={8} value={"08"}>08 - August - VIII</option>
                    <option key={9} value={"09"}>09 - September - IX</option>
                    <option key={10} value={"10"}>10 - October - X</option>
                    <option key={11} value={"11"}>11 - November - XI</option>
                    <option key={12} value={"12"}>12 - December - XII</option>
                </select>
                <select name={dayName} style={style.select}
                    onChange={(e) => onFieldChange(dayName, e.target.value)}
                    onFocus={() => onFieldFocus(field.name)}>
                    <option key={-1} value={''}>-- Day --</option>
                    <option key={0} value={'00'}>Not Shown</option>
                    {dayOptions}
                </select>
                <select name={yearName} style={style.select}
                    onChange={(e) => onFieldChange(yearName, e.target.value)}
                    onFocus={() => onFieldFocus(field.name)}>
                    <option key={-1} value={''}>-- Year --</option>
                    <option key={0} value={'0000'}>Not Shown</option>
                    {yearOptions}
                </select>
            </div>
        );
    }
}

const style = {
    select:  Object.assign({width: '33.33%'}, css.formSelectControl),
};
