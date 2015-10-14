import React from 'react';
import { css } from 'constants/css';
import $ from 'jquery';
require('bootstrap-webpack!../../../bootstrap.config.js');

export default class Splash extends React.Component {
    componentDidMount() {
        $(React.findDOMNode(this)).on('hidden.bs.modal', this.props.onHide);
        $(React.findDOMNode(this)).modal('show');
        $(React.findDOMNode(this)).find('.modal-footer button').focus();
    }
    render() {
        const { goText } = this.props.data;
        const paragraphs = goText.map((p) => {
            return <p>{p}</p>;
        });
        return (
             <div id="splash" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content" style={style.content}>
                        <div className="modal-body">
                            {paragraphs}
                        </div>
                        <div style={style.footer} className="modal-footer">
                            <button type="button" style={style.button}
                                className="btn btn-default" data-dismiss="modal">
                                Got it. Let me transcribe!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    content: {
        backgroundColor: css.gossamer,
        color: css.white,
    },
    footer: {
        border: 'none',
    },
    button: {
        background: css.green,
        border: `1px solid ${css.green}`,
        color: css.white,
        width: '100%',
    },
};
