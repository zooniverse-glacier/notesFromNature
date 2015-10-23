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
        let { month, day, year } = this.state,
            value = event.target.value.replace(/\D/g, '');
        if (!value) {
            month = '';
        } else if (+value <= 12) {
            month = value;
        }
        this.setState({month: month});
        this.updateField(month, day, year);
    }
    dayChanged(event) {
        let { month, day, year } = this.state,
            value = event.target.value.replace(/\D/g, '');
        if (!value) {
            day = '';
        } else if (+value <= 31) {
            day = value;
        }
        this.setState({day: day});
        this.updateField(month, day, year);
    }
    yearChanged(event) {
        let { month, day, year } = this.state,
            value = event.target.value.replace(/\D/g, '');
        if (!value) {
            year = '';
        } else if (+value <= currentYear) {
            year = value;
        }
        this.setState({year: year});
        this.updateField(month, day, year);
    }
    updateField(month, day, year) {
        const { field, onFieldChange } = this.props;
        let value = '';
        month = ('00'   + month).substr(-2);
        day =   ('00'   + day  ).substr(-2);
        year =  ('0000' + year ).substr(-4);
        if (+month || +day || +year) {
            value = `${year}-${month}-${day}`;
        }
        console.log(value);
        onFieldChange(field.name, value);
    }
    render() {
        const { month, day, year } = this.state;
        console.log(this.state);
        const { field, onFieldFocus } = this.props;
        return (
            <div>
                <input type="number" maxLength="2" min="1" ref="month"
                    style={style}
                    value={month}
                    name={field.name + 'Month'}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => this.monthChanged(e)}
                    placeholder="-- Month --" />
                <input type="number" maxLength="2" min="1" ref="day"
                    style={style}
                    value={day}
                    name={field.name + 'Day'}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => this.dayChanged(e)}
                    placeholder="-- Day --" />
                <input type="number" maxLength="4" min="1" ref="year"
                    style={style}
                    value={year}
                    name={field.name + 'Year'}
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
