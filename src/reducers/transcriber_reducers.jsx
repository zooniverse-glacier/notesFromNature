import { combineReducers } from 'redux';
import * as actionType from 'actions/transcriber_actions';
import { collections } from 'constants/collections';
import * as helper from 'helpers/transcriber_reducer_helpers';

const initialState = {
    // TODO collections initialization should happen on page load
    collection: Object.assign({}, collections.Crabs, {
        completed: 0,
        collections: [],
        // currentCollection
    }),
    form: {
        //Form state, this is what remains after we move the rest
        helpExpanded: false,
        fieldSelected: '',
        values: {},
        errors: [],
        started: undefined,
        finshed: undefined,
        submitClicked: false,
        skipClicked: false,

        // TODO Roll this into another store
        ready: false,

        // TODO subjects: {}, Make this a new store
        subjects: [],
        subjectIndex: 0,
        subject: {images: []},
        imageSelected: undefined,
        isFetchingSubjectList: true,
        subjectListFetched: false,

        // TODO splash: {},  Make this a new store
        startClicked: false,
    },
};

function collection(state=initialState.collection, action='') {
    let nextState;
    switch(action.type) {
        case actionType.REQUEST_COLLECTION_LIST:
            break;

        case actionType.RECEIVE_COLLECTION_LIST:
            nextState = Object.assign({}, state, {
                archiveListFetched: true,
                collections: helper.reshapeCollectionsList(action.json),
            });
            nextState = helper.setCurrentCollection(nextState);
            return nextState;

        case actionType.INCREMENT_COMPLETED:
            return Object.assign({}, state, {completed: state.completed + 1});
    }
    return state;
}

function form(state=initialState.form, action='') {
    let nextState;
    switch (action.type) {
        case actionType.REQUEST_SUBJECT_LIST:
            return Object.assign({}, state, {isFetchingSubjectList: true});

        case actionType.RECEIVE_SUBJECT_LIST:
            nextState = Object.assign({}, state, {
                isFetchingSubjectList: false,
                subjectListFetched: true,
                subjects: helper.reshapeSubjectList(action.json),
                subjectIndex: -1,
            });
            nextState = helper.nextSubject(nextState);
            helper.isReady(nextState);
            return nextState;

        case actionType.START_TRANSCRIBING:
            nextState = Object.assign({}, state, {startClicked: true});
            helper.isReady(nextState);
            return nextState;

        case actionType.SELECT_FIELD:
            if (action.fieldSelected) {
                return Object.assign({}, state, {fieldSelected: action.fieldSelected});
            }
            break;

        case actionType.TOGGLE_HELP:
            return Object.assign({}, state, {helpExpanded: !state.helpExpanded});

        case actionType.UPDATE_FIELD:
            nextState = Object.assign({}, state, {submitClicked: false, skipClicked: false});
            nextState.values[action.name] = (action.value || '').trim();
            return nextState;

        case actionType.NEXT_SUBJECT:
            nextState = Object.assign({}, state);
            nextState = helper.nextSubject(nextState);
            return nextState;

        case actionType.SELECT_IMAGE:
            if (action.imageSelected) {
                return Object.assign({}, state, {imageSelected: action.imageSelected});
            }
            break;

        case actionType.POST_SKIP_SUBJECT:
            return Object.assign({}, state, {finished: new Date()});

        case actionType.PREVENT_SKIP_SUBJECT:
            return Object.assign({}, state, {skipClicked: true});

        case actionType.POST_SUBMIT_SUBJECT:
            return Object.assign({}, state, {finished: new Date()});

        case actionType.PREVENT_SUBMIT_SUBJECT:
            return Object.assign({}, state, {submitClicked: true});

        case actionType.VALIDATE_SUBJECT:
            nextState = Object.assign({}, state);
            helper.runFieldLevelSubmitHelpers(nextState, stores.collection());
            return nextState;
    }
    return state;
}

const stores = {
    collection,
    form,
};

const transcriberStore = combineReducers(stores);

export default transcriberStore;
