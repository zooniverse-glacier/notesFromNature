import React from 'react';
import { css } from 'constants/css';

//const currentYear = ;

export default class DateField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {month: '', day: '', year: ''};
    }
    monthChanged(event) {
        let value = event.target.value;
        console.log(month);
        if (value && value >= 1 && value <= 12) {
            this.setState({ month: value });
        } else if (! value) {
            this.setState({ month: '' });
        }
    }
    dayChanged(event) {
        let value = event.target.value;
        if (value && value >= 1 && value <= 31) {
            this.setState({ day: '' + value });
        } else if (! value) {
            this.setState({ day: '' });
        }
    }
    yearChanged(event) {
        let value = event.target.value;
        if (value && value >= 1 && value <= (new Date()).getFullYear()) {
            this.setState({ year: value });
        } else if (! value) {
            this.setState({ year: '' });
        }
    }
    dateChanged(event) {
        //this.props.onFieldChange(name, event.target.value);
    }
    render() {
        console.log(this.state);
        const { month, day, year } = this.state;
        const { field, onFieldFocus, onFieldChange } = this.props,
            monthName = field.name + 'Month',
            dayName = field.name + 'Day',
            yearName = field.name + 'Year';
        return (
            <div>
                <input type="number" min="1" max="12" maxLength="2"
                    style={style}
                    value={month}
                    name={monthName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => this.monthChanged(e)}
                    placeholder="-- Month --" />
                <input type="number" min="1" max="31" maxLength="2"
                    style={style}
                    value={day}
                    name={dayName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => this.dayChanged(e)}
                    placeholder="-- Day --" />
                <input type="number" min="1830" max={(new Date()).getFullYear()}
                    maxLength="4"
                    style={style}
                    value={year}
                    name={yearName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => this.yearChanged(e)}
                    placeholder="-- Year --" />
              </div>
        );
    }
}

const style = {
    borderRadius: css.radius,
    padding: '2px 4px',
    width: '33.33%',
};
