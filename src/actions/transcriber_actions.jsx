import fetch from 'isomorphic-fetch';
import { subjectsUrl, archivesUrl } from 'helpers/url_helpers';

//export const SET_COLLECTION = 'SET_COLLECTION';

export const START_TRANSCRIBING = 'START_TRANSCRIBING';
export function startTranscribing() {
    return {type: START_TRANSCRIBING};
}

export const INCREMENT_COMPLETED = 'INCREMENT_COMPLETED';
export function incrementCompleted() {
    return {type: INCREMENT_COMPLETED};
}

export const REQUEST_SUBJECT_LIST = 'REQUEST_SUBJECT_LIST';
function requestSubjectList() {
    return {type: REQUEST_SUBJECT_LIST};
}

export const RECEIVE_SUBJECT_LIST = 'RECEIVE_SUBJECT_LIST';
function receiveSubjectList(json) {
    return {type: RECEIVE_SUBJECT_LIST, json};
}

export function fetchSubjectList(collection) {
    return function(dispatch) {
        dispatch(requestSubjectList());
        return fetch(subjectsUrl(collection))
            .then(response => response.json())
            .then(json => dispatch(receiveSubjectList(json)));
    };
}

export const SELECT_IMAGE = 'SELECT_IMAGE';
export function selectImage(image) {
    return {type: SELECT_IMAGE, imageSelected: image};
}

export const TOGGLE_HELP = 'TOGGLE_HELP';
export function toggleHelp() {
    return {type: TOGGLE_HELP};
}

export const SELECT_FIELD = 'SELECT_FIELD';
export function selectField(name) {
    return {type: SELECT_FIELD, fieldSelected: name};
}

export const UPDATE_FIELD = 'UPDATE_FIELD';
export function updateField(name, value) {
    return {type: UPDATE_FIELD, name, value};
}

export const SKIP_SUBJECT = 'SKIP_SUBJECT';
export function skipSubject() {
    return {type: SKIP_SUBJECT};
}

export const SUBMIT_SUBJECT = 'SUBMIT_SUBJECT';
export function submitSubject() {
    return {type: SUBMIT_SUBJECT};
}
