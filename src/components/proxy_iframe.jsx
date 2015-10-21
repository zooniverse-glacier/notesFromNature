import React from 'react';
import ReactDOM from "react-dom";
import { proxyUrl } from  'helpers/url_helpers';
import { css } from 'constants/css';
//import $ from 'jquery';

export default class ProxyIFrame extends React.Component {
    render() {
        return (
            <iframe id="proxyIFrame" src={proxyUrl()} style={css.hidden} />
        );
    }
}
