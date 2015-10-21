import React from 'react';
import { css } from 'constants/css';

const currentYear = (new Date()).getFullYear();

export default class DateField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {month: '', day: '', year: ''};
    }
    componentWillReceiveProps(nextProps) {
        const [year, month, day] = nextProps.value.split('-');
        this.setState({
            year:  +year  ? year  : '',
            month: +month ? month : '',
            day:   +day   ? day   : '',
        });
    }
    monthChanged(event) {
        let value = event.target.value;
        if (!value || (value && value >= 0 && value <= 12)) {
            this.setState({month: value});
        }
    }
    dayChanged(event) {
        let value = event.target.value;
        if (!value || (value && value >= 0 && value <= 31)) {
            this.setState({day: value});
        }
    }
    yearChanged(event) {
        let value = event.target.value;
        if (!value || (value && value >= 0 && value <= currentYear)) {
            this.setState({year: value});
        }
    }
    handleBlur(event) {
        const { field, onFieldChange } = this.props;
        let { month, day, year } = this.state,
            value = '';
        month = ('00'   + month).substr(-2);
        day =   ('00'   + day  ).substr(-2);
        year =  ('0000' + year ).substr(-4);
        if (+month || +day || +year) {
            value = `${year}-${month}-${day}`;
        }
        onFieldChange(field.name, value);
    }
    render() {
        const { month, day, year } = this.state;
        const { field, onFieldFocus } = this.props,
            monthName = field.name + 'Month',
            dayName = field.name + 'Day',
            yearName = field.name + 'Year';
        return (
            <div>
                <input type="number" maxLength="2" min="1"
                    style={style}
                    value={month}
                    name={monthName}
                    onFocus={() => onFieldFocus(field.name)}
                    onBlur={() => this.handleBlur(event)}
                    onChange={(e) => this.monthChanged(e)}
                    placeholder="-- Month --" />
                <input type="number" maxLength="2" min="1"
                    style={style}
                    value={day}
                    name={dayName}
                    onFocus={() => onFieldFocus(field.name)}
                    onBlur={() => this.handleBlur(event)}
                    onChange={(e) => this.dayChanged(e)}
                    placeholder="-- Day --" />
                <input type="number" maxLength="4" min="1"
                    style={style}
                    value={year}
                    name={yearName}
                    onFocus={() => onFieldFocus(field.name)}
                    onBlur={() => this.handleBlur(event)}
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
