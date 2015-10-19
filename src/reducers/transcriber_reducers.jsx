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
    // subjects: {}, // subjects, subject, subjectIndex/currentSubject, imageSelected
    // splash: {}, // show/hide flag
    form: { // Move some of this onto other stores (see above)
        subjects: [],
        subjectIndex: 0,
        subject: {images: []},
        imageSelected: undefined,
        isFetching: true,
        ready: false,
        subjectListFetched: false,
        startClicked: false,
        helpExpanded: false,
        fieldSelected: '',
        values: {},
        errors: [],
        started: undefined,
        finshed: undefined,
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

        case actionType.DECREMENT_COMPLETED:
            return Object.assign({}, state, {completed: state.completed - 1});
    }
    return state;
}

function form(state=initialState.form, action='') {
    let nextState;
    switch (action.type) {
        case actionType.REQUEST_SUBJECT_LIST:
            return Object.assign({}, state, {isFetching: true});

        case actionType.RECEIVE_SUBJECT_LIST:
            nextState = Object.assign({}, state, {
                isFetching: false,
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
            nextState = Object.assign({}, state);
            nextState.values[action.name] = (action.value || '').trim();
            return nextState;

        case actionType.SUBMIT_SUBJECT:
            nextState = Object.assign({}, state);
            helper.runFieldLevelSubmitHelpers(nextState, stores.collection());
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

        case actionType.POST_SUBMIT_SUBJECT:
            return Object.assign({}, state, {finished: new Date()});
    }
    return state;
}

const stores = {
    collection,
    form,
};

const transcriberStore = combineReducers(stores);

export default transcriberStore;
