import React from 'react';
import { css } from 'constants/css';
import Label from 'components/transcriber/form/label';

export default class IdentificationField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            scientificName = field.name + 'ScientificName',
            identifierName = field.name + 'Identifier';
        return (
            <div>
                <Label field={field} />
                <input type="text" style={style}
                    name={scientificName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => onFieldChange(scientificName, e.target.value)}
                    placeholder="-- Scientific Name --"/>
                <input type="text" style={style}
                    name={identifierName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => onFieldChange(identifierName, e.target.value)}
                    placeholder="-- Identifier’s Name --"/>
            </div>
        );
    }
}

const style = {
    borderRadius: css.radius,
    color: css.black,
    padding: '2px 4px',
    width: '50%',
};
