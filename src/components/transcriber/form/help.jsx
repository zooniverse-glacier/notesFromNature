import React from 'react';
import { css } from 'constants/css';

export default class FormHelp extends React.Component {
    render() {
        const { field, helpExpanded, onToggleHelp } = this.props;
        const expandStyle = helpExpanded ? style.showHelp : style.hideHelp;
        let paragraphs = field.help.map(function(paragraph, i) {
            return <p key={i} className="dragHandle">{paragraph}</p>;
        });
        return (
            <div style={style.container}>
                <div>
                    <div className="dragHandle" style={style.title}>
                        {field.label}
                    </div>
                    <button style={style.expandButton} onClick={() => onToggleHelp()}>
                        {helpExpanded ? 'Hide Help' : 'Show Help' }
                    </button>
                </div>
                <div className="dragHandle" style={expandStyle}>
                    {paragraphs}
                </div>
            </div>
        );
    }
}

let style = {
    container: {
        color: css.white,
        cursor: 'move',
        height: 'auto',
        padding: 4,
    },
    title: {
        minWidth: '100%',
    },
    expandButton: {
        background: css.white,
        border: 0,
        borderRadius: css.buttonRadius,
        position: 'absolute',
        color: css.black,
        cursor: 'default',
        right: 4,
        padding: '0 6px',
        top: 6,
    },
    showHelp: {
        height: 170,
        marginTop: 6,
        overflow: 'auto',
        transition: css.transition,
    },
    hideHelp: {
        height: 0,
        transition: css.transition,
        visibility: 'hidden',
    },
};
