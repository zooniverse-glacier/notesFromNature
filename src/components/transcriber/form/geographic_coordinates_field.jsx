import React from 'react';
import { css } from 'constants/css';

export default class GeographicCoordinatesField extends React.Component {
    render() {
        const { field, onFieldFocus, onFieldChange } = this.props,
            latitudeName = field.name + 'Latitude',
            longitudeName = field.name + 'Longitude';
        return (
            <div>
                <input type="text" style={style}
                    name={latitudeName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => onFieldChange(latitudeName, e.target.value)}
                    placeholder="-- Latitude --"/>
                <input type="text" style={style}
                    name={longitudeName}
                    onFocus={() => onFieldFocus(field.name)}
                    onChange={(e) => onFieldChange(longitudeName, e.target.value)}
                    placeholder="-- Longitude --"/>
            </div>
        );
    }
}

const style = {
    borderRadius: css.radius,
    padding: '2px 4px',
    width: '50%',
};
