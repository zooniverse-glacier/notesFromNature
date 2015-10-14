
import React from 'react';
import { css } from 'constants/css';
require('bootstrap-webpack!../../../bootstrap.config.js');

export default class NavBar extends React.Component {
    render() {
        const { title, subtitle, completed } = this.props.data;
        return (
            <nav className="navbar navbar-default navbar-fixed-top nfn" style={style.navBar}>
                <div className="container">
                    <p className="navbar-text">
                        <span style={style.title}>{title}</span>
                        <br/>
                        <span style={style.subtitle}>{subtitle}</span>
                    </p>
                    <a className="navbar-text navbar-right visible-sm visible-md visible-lg glyphicon glyphicon-off"
                        href="/" aria-hidden="true" style={style.button}></a>
                    <p className="navbar-text navbar-right visible-sm visible-md visible-lg"
                        style={style.countText}>{completed == 1 ? 'RECORD' : 'RECORDS'}<br/>DONE</p>
                    <p className="navbar-text navbar-right visible-sm visible-md visible-lg"
                        style={style.count}>{completed}</p>
                </div>
            </nav>
        );
    }
}

const style = {
    navBar: Object.assign(
        {
            background: `${css.black} url('/images/transcribers/bg-header.png')`,
            borderBottom: css.canvasBorder,
            height: css.navBarHeight,
            zIndex: 1,
        },
        css.noUserSelect
    ),
    title: {
        color: css.white,
        fontSize: 17,
        fontWeight: 800,
    },
    subtitle: {
        color: '#aaa',
        fontSize: 13,
        marginTop: 4,
    },
    countText: {
        color: css.white,
        fontSize: 12,
        fontWeight: 800,
        marginTop: 20,
    },
    count: {
        color: css.white,
        fontSize: 38,
        fontWeight: 800,
        marginTop: 10,
    },
    button: {
        backgroundColor: css.transparent,
        border: 'none',
        color: css.orange,
        fontSize: 38,
        marginLeft: 20,
        marginTop: 20,
        textDecoration: 'none',
    }
};
