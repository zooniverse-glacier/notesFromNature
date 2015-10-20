// Common CSS values

export const css = {
    white:  '#fefefa',
    black:  '#151522',
    gray:   '#646467',
    orange: '#ff7c09',
    green:  '#693',
    red:    '#df4c06',
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
        userSelect: 'none'
    },
};
css.canvasBorder = `1px solid ${css.gray}`;

css.hidden = {
    height: 0,
    visibility: 'hidden',
};

css.toggleHide = Object.assign({}, css.hidden, {
    transition: css.transition
});
