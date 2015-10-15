import React from 'react';
import { css } from 'constants/css';

export default class Label extends React.Component {
    render() {
        const { field } = this.props;
        return (
            <label style={css.formLabel} className="dragHandle">{field.label + ':'}</label>
        );
    }
}
