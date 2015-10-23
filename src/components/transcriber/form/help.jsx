import React from 'react';
import { css } from 'constants/css';

export default class FormHelp extends React.Component {
    render() {
        const { field, helpExpanded, onToggleHelp } = this.props;
        const expandStyle = helpExpanded ? style.showHelp : css.toggleHide;
        let paragraphs = field.help.map(function(paragraph, i) {
            return <p key={i} className="dragHandle">{paragraph}</p>;
        });
        return (
            <div style={style.container}>
                <div style={style.titleContainer}>
                    <div className="dragHandle" style={style.title}>
                        <div className="dragHandle">{field.label}</div>
                        <button style={style.expandButton} onClick={() => onToggleHelp()}>
                            {helpExpanded ? 'Hide Help' : 'Show Help On' }
                        </button>
                    </div>
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
    titleContainer: {
        position: 'relative',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 110,
        minWidth: '100%',
    },
    expandButton: {
        background: css.white,
        border: 0,
        borderRadius: css.buttonRadius,
        fontSize: 13,
        fontWeight: 'normal',
        position: 'absolute',
        color: css.black,
        cursor: 'default',
        left: 0,
        padding: '0 6px',
        top: 0,
    },
    showHelp: {
        height: 130,
        marginTop: 6,
        overflow: 'auto',
        transition: css.transition,
    },
};
