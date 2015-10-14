import React from 'react';
import { css } from 'constants/css';

export default class ImageViewer extends React.Component {
    constructor() {
        super();
        let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        this.transform = svg.createSVGMatrix();
        this.point = svg.createSVGPoint();
        this.image = new Image();
        this.image.crossOrigin = 'anonymous';
        this.scaleFactor = 1.1;
        this.state = { isReady: false, dragStart: undefined };
    }
    transformedPoint(x, y) {
        this.point.x = x;
        this.point.y = y;
        return this.point.matrixTransform(this.transform.inverse());
    }
    scale(scale) {
        this.transform = this.transform.scale(scale);
        this.context.scale(scale, scale);
    }
    translate(dx, dy) {
        this.transform = this.transform.translate(dx, dy);
        this.context.translate(dx, dy);
    }
    clear() {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.restore();
    }
    draw() {
        this.clear();
        this.context.drawImage(
            this.image, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
    }
    resize() {
        this.clear();
        this.initializeCanvas();
        this.intializeImage();
        this.draw();
    }
    initializeCanvas() {
        const hasFooter = this.props.subject.images.length > 1;
        this.canvas = React.findDOMNode(this.refs.canvas);
        this.context = this.canvas.getContext('2d');
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight - css.navBarHeight;
        this.canvas.height -= hasFooter ? css.footerHeight : 0;
        this.lastX = this.canvas.width / 2;
        this.lastY = this.canvas.height / 2;
    }
    intializeImage() {
        let scale = Math.min(1, this.canvas.height / this.image.naturalHeight);
        this.imageWidth  = this.image.naturalWidth  * scale;
        this.imageHeight = this.image.naturalHeight * scale;
        this.imageX = Math.max((this.canvas.width  - this.imageWidth)  / 2, 0);
        this.imageY = Math.max((this.canvas.height - this.imageHeight) / 2, 0);
    }
    componentDidMount() {
        window.addEventListener('resize', () => { this.resize(); }, false);
        this.initializeCanvas();
        this.image.onload = () => {
            this.intializeImage();
            this.draw();
            this.setState({ isReady: true });
        };
        this.image.src = this.props.src;
    }
    componentDidUpdate() {
        let canvas = React.findDOMNode(this.refs.canvas);
        this.context = canvas.getContext('2d');
    }
    componentWillUnmount() {
        window.removeEventListener('resize');
    }
    zoom(exponent, point) {
        let factor = Math.pow(this.scaleFactor, exponent);
        if (!point) {
            point = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        }
        this.translate(point.x, point.y);
        this.scale(factor);
        this.translate(-point.x, -point.y);
        this.draw();
        event.preventDefault();
    }
    handleWheel(event) {
        let exponent = !(event && event.deltaY) ? 0 : event.deltaY > 0 ? -1 : 1;
        if (exponent) {
            this.zoom(exponent, this.transformedPoint(this.lastX, this.lastY));
        }
    }
    handleMouseDown(event) {
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        this.setState({ dragStart: this.transformedPoint(this.lastX, this.lastY) });
    }
    handleMouseMove(event) {
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        let { dragStart } = this.state;
        if (dragStart) {
            let point = this.transformedPoint(this.lastX, this.lastY);
            this.translate(point.x - dragStart.x, point.y - dragStart.y);
            this.draw();
        }
    }
    handleMouseUp(event) {
        this.setState({ dragStart: undefined });
    }
    handleMouseEnter(event) {
        let { dragStart } = this.state;
        if (!(event && event.buttons && dragStart)) {
            this.setState({ dragStart: undefined });
        }
    }
    handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        const { isSelected } = this.props;
        const { isReady } = this.state;
        let viewerStyle = isSelected && isReady ? style.viewer : style.hidden;
        return (
            <div style={viewerStyle}>
                <span style={style.zoomIn} className="glyphicon glyphicon-plus"
                    onClick={() => this.zoom(1)}></span>
                <span style={style.zoomOut} className="glyphicon glyphicon-minus"
                    onClick={() => this.zoom(-1)}></span>
                <canvas ref='canvas' style={style.canvas}
                    onDrop={e => this.handleWheel(e)}
                    onWheel={e => this.handleWheel(e)}
                    onMouseDown={e => this.handleMouseDown(e)}
                    onMouseMove={e => this.handleMouseMove(e)}
                    onMouseUp={e => this.handleMouseUp(e)}
                    onMouseEnter={e => this.handleMouseEnter(e)} />
            </div>
        );
    }
}

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
    hidden: {
        visibility: 'hidden'
    },
    canvas: {
        cursor: 'default',
    },
    zoomControl: {
        backgroundColor: css.black,
        border: css.canvasBorder,
        borderRadius: css.buttonRadius,
        color: css.white,
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
