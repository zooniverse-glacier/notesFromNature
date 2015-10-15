import React from 'react';
import ReactDOM from "react-dom";
import { css } from 'constants/css';

export default class ImageSelector extends React.Component {
    render() {
        const { subject, imageSelected, onImageSelectorClick } = this.props,
                images = subject.images.map((image, i) => {
                    let isSelected = image.location == imageSelected;
                    return (
                        <SelectorImage key={i} image={image}
                            onImageSelectorClick={onImageSelectorClick}
                            subject={subject}
                            isSelected={isSelected} />
                    );
                });
        return (
            <footer style={style.footer}>
                {images}
            </footer>
        );
    }
}

class SelectorImage extends React.Component {
    constructor() {
        super();
        this.state = { isReady: false };
    }
    handleLoad() {
        const thumbnailSize = 120;
        const img = ReactDOM.findDOMNode(this);
        img.width  = thumbnailSize * img.naturalWidth / img.naturalHeight;
        img.height = thumbnailSize;
        this.setState({ isReady: true });
    }
    render() {
        const { subject, onImageSelectorClick, image, isSelected } = this.props,
              { isReady } = this.state,
              src = image.location;
        let imgStyle = style.imgHidden;
        if (isReady) {
            imgStyle = isSelected ? style.imgSelected : style.img;
        }
        return (
            <img src={src} style={imgStyle}
                onClick={() => onImageSelectorClick(src)}
                onLoad={() => this.handleLoad()}>
            </img>
        );
    }
}

const style = {
    footer: Object.assign(
        {
            background: css.blackSolid,
            borderTop: css.canvasBorder,
            bottom: 0,
            height: css.footerHeight,
            paddingLeft: 50,
            position: 'absolute',
            width: '100%',
            zIndex: 1,
        },
        css.noUserSelect
    ),
    img: {
        border: `1px solid ${css.white}`,
        marginLeft: 20,
        marginTop: 10,
    },
    imgSelected: {
        border: `1px solid ${css.orange}`,
        marginLeft: 20,
        marginTop: 10,
    },
    imgHidden: {
        visibility: 'hidden'
    }
};
