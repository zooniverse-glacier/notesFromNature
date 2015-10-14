import { combineReducers } from 'redux';
import * as actionType from 'actions/transcriber_actions';
import { collections } from 'constants/collections';
import { mockSubjects } from 'constants/mock_subjects';
import * as helper from 'reducers/transcriber_submit_helpers';

const initialState = {
    collection: Object.assign({}, collections.Crabs, {completed: 0}),
    subjects: [],
    form: {
        helpExpanded: false,
        imageSelected: mockSubjects[0].images[0].location,
        fieldSelected: '',
        subject: Object.assign({}, mockSubjects[0]),
        values: {},
        errors: [],
    },
    splash: { visible: true },
};

function collection(state=initialState.collection, action='') {
    switch(action.type) {
        case actionType.INCREMENT_COMPLETED:
            return Object.assign({}, state, {completed: state.completed + 1});

        case actionType.DECREMENT_COMPLETED:
            return Object.assign({}, state, {completed: state.completed - 1});
    }
    return state;
}

function form(state=initialState.form, action='') {
    let newState;
    switch(action.type) {
        case actionType.SELECT_FIELD:
            if (action.fieldSelected) {
                return Object.assign({}, state, {fieldSelected: action.fieldSelected});
            }
            break;

        case actionType.TOGGLE_HELP:
            return Object.assign({}, state, {helpExpanded: !state.helpExpanded});

        case actionType.UPDATE_FIELD:
            newState = Object.assign({}, state);
            newState.values[action.name] = action.value;
            return newState;

        case actionType.SUBMIT_SUBJECT:
            newState = helper.runFieldLevelSubmitHelpers(state, stores.collection());
            return newState;

        case actionType.SKIP_SUBJECT:
            break;

        case actionType.SELECT_IMAGE:
            if (action.imageSelected) {
                return Object.assign({}, state, {imageSelected: action.imageSelected});
            }
            break;
    }
    return state;
}

const stores = {
    collection,
    form,
};

const transcriberStore = combineReducers(stores);

export default transcriberStore;
