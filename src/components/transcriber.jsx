import React from 'react';
import { connect } from 'react-redux';
import Splash from 'components/transcriber/splash';
import NavBar from 'components/transcriber/navbar';
import ImageViewer from 'components/transcriber/image_viewer';
import ImageSelector from 'components/transcriber/image_selector';
import Form from 'components/transcriber/form';
import ProxyIFrame from 'components/proxy_iframe';
import * as action from 'actions/transcriber_actions';

class Transcriber extends React.Component {
    componentWillMount() {
        const { collection, dispatch } = this.props;
        let firstField = collection.fields.findIndex(
            (field, i) => { return field.name; }
        );
        dispatch(action.selectField(collection.fields[firstField].name));

        // Adjust surrounding markup to handle the fixed footer
        this.margin = document.body.style.margin;
        this.overflow = document.body.style.overflow;
        this.background = document.body.style.background;
        this.position = document.position;
        this.minHeight = document.minHeight;
        document.position = 'relative';
        document.minHeight = '100%';
        document.body.style.margin = 0;
        document.body.style.overflow = 'hidden';
        document.body.style.background = 'url("/images/transcribers/bg-transcriber.png")';
    }
    componentWillUnmount() {
        // Restore surrounding markup
        document.position = this.position;
        document.minHeight = this.minHeight;
        document.body.style.margin = this.margin;
        document.body.style.overflow = this.overflow;
        document.body.style.background = this.background;
    }
    componentDidMount() {
        this.props.dispatch(action.fetchCollectionList());
    }
    render() {
        const { collection, form, dispatch } = this.props;
        const { subject, imageSelected } = form;

        const formControl = !form.ready ? undefined :
            <Form fields={collection.fields}
                form={form}
                subject={subject}
                onFieldFocus={n => dispatch(action.selectField(n))}
                onFieldChange={(n, v, ...a) => dispatch(action.updateField(n, v, a))}
                onToggleHelp={() => dispatch(action.toggleHelp())}
                onSkip={() => dispatch(action.skipSubject())}
                onSubmit={e => dispatch(action.submitSubject())} />;

        const images = subject.images.map((image, i) => {
            let isSelected = image == imageSelected;
            return(
                <ImageViewer key={i} src={image} subject={subject} isSelected={isSelected} />
            );
        });

        const footer = subject.images.length < 2 ? undefined :
            <ImageSelector subject={subject} imageSelected={imageSelected}
                onImageSelectorClick={src => dispatch(action.selectImage(src))} />;

        return (
            <div>
                <ProxyIFrame />
                <Splash data={collection}
                    onHide={() => dispatch(action.startTranscribing())}/>
                <NavBar data={collection} />
                {formControl}
                {images}
                {footer}
            </div>
        );
    }
}

function select(state) {
    return {
        collection: state.collection,
        form: state.form,
    };
}

export default connect(select)(Transcriber);
