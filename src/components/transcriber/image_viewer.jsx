import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'constants/css';
import $ from 'jquery';
import panzoom from 'jquery.panzoom';
import mousewheel from 'jquery-mousewheel';

let ImageViewer = React.createClass({
    getInitialState: function() {
        return { isReady: false };
    },
    componentDidMount: function() {
        $(window).on('resize', () => {
            this.scale();
            this.center();
        });
    },
    zoomIn: function() {
        $(ReactDOM.findDOMNode(this.refs.image)).panzoom('zoom');
    },
    zoomOut: function() {
        $(ReactDOM.findDOMNode(this.refs.image)).panzoom('zoom', true);
    },
    handleLoad: function() {
        this.scale();
        this.makePanZoom();
        this.center();
        this.setState({isReady: true});
    },
    getMaxDimensions: function() {
        const hasFooter = this.props.subject.images.length > 1;
        let img = ReactDOM.findDOMNode(this.refs.image),
            maxWidth  = window.innerWidth,
            maxHeight = window.innerHeight - css.navBarHeight;
        maxHeight -= hasFooter ? css.footerHeight : 0;
        return [maxHeight, maxWidth];
    },
    scale: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img = ReactDOM.findDOMNode(this.refs.image),
            scale  = Math.min(1, maxHeight / img.naturalHeight);
        img.width  = img.naturalWidth  * scale;
        img.height = img.naturalHeight * scale;
    },
    center: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img = ReactDOM.findDOMNode(this.refs.image),
            moveX = Math.max((maxWidth  - img.width)  / 2, 0),
            moveY = Math.max((maxHeight - img.height) / 2, 0);
        $(ReactDOM.findDOMNode(this.refs.image)).panzoom("reset").panzoom('pan', moveX, moveY);
    },
    makePanZoom: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img  = ReactDOM.findDOMNode(this.refs.image),
            $img = $(img).panzoom({increment: 0.2, maxScale: 20});
        if (!$img.parent().hasClass('mousewheel')) {
            $img.parent().addClass('mousewheel').on('mousewheel.focal', function(event) {
                event.preventDefault();
                var delta = event.delta || event.originalEvent.wheelDelta;
                var zoomOut = delta ? delta < 0 : event.originalEvent.deltaY > 0;
                $img.panzoom('zoom', zoomOut, {increment: 0.1, animate: false, focal: event});
            });
        }
        $img.parent().css('overflow', 'visible'); // panzoom gives us hidden we want visible
    },
    componentWillUnmount: function() {
        $(ReactDOM.findDOMNode(this.refs.image)).panzoom('destroy');
        $(window).off('resize');
    },
    render: function() {
        const { isSelected, src } = this.props;
        const { isReady } = this.state;
        let viewerStyle = isSelected && isReady ? style.viewer : css.hidden;
        return (
            <div style={viewerStyle}>
                <span style={style.zoomIn} className="glyphicon glyphicon-zoom-in"
                    onClick={this.zoomIn}></span>
                <span style={style.zoomOut} className="glyphicon glyphicon-zoom-out"
                    onClick={this.zoomOut}></span>
                <img src={src} ref="image" onLoad={this.handleLoad}></img>
            </div>
        );
    }
});

const style = {
    viewer: Object.assign(
        {
            height: '100%',
            left: 0,
            paddingTop: css.navBarHeight,
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 0
        },
        css.noUserSelect
    ),
    canvas: {
        cursor: 'default',
    },
    zoomControl: {
        background: css.black,
        border: css.canvasBorder,
        borderRadius: css.buttonRadius,
        color: css.white,
        fontSize: 20,
        left: 10,
        padding: 12,
        position: 'fixed',
        textAlign: 'center',
        verticalAlign: 'middle',
        zIndex: 1
    },
};
style.zoomIn = Object.assign({top: 100}, style.zoomControl);
style.zoomOut = Object.assign({top: 150}, style.zoomControl);

export default ImageViewer;
