// Common CSS values

export const css = {
    white:  '#fefefa',
    black:  '#151522',
    gray:   '#646467',
    orange: '#ff7c09',
    green:  '#693',
    blackSolid: 'rgba(2, 2, 2, 1.0)',
    transparent: 'rgba(0, 0, 0, 0.6)',
    gossamer: 'rgba(0, 0, 0, 0.2)',
    navBarHeight: 80,
    footerHeight: 140,
    radius:       4,
    buttonRadius: 8,
    transition: 'all 0.5s ease',
    noUserSelect: {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userUelect: 'none'
    },
};
css.canvasBorder = `1px solid ${css.gray}`;
css.formLabel = {
    color: css.white,
    cursor: 'move',
    margin: '5px 0 0 6px',
    width: '100%',
};
css.formSelectControl = {
    borderRadius: css.radius,
    color: css.black,
    padding: '3px',
};
