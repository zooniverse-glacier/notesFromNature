import fetch from 'isomorphic-fetch';
import { subjectsUrl, archivesUrl } from 'helpers/url_helpers';

export const START_TRANSCRIBING = 'START_TRANSCRIBING';
export function startTranscribing() {
    return {type: START_TRANSCRIBING};
}

export const INCREMENT_COMPLETED = 'INCREMENT_COMPLETED';
export function incrementCompleted() {
    return {type: INCREMENT_COMPLETED};
}

export const REQUEST_COLLECTION_LIST = 'REQUEST_COLLECTION_LIST';
function requestCollectionList() {
    return {type: REQUEST_COLLECTION_LIST};
}

export const RECEIVE_COLLECTION_LIST = 'RECEIVE_COLLECTION_LIST';
function receiveCollectionList(json) {
    return {type: RECEIVE_COLLECTION_LIST, json};
}

export function fetchCollectionList() {
    return (dispatch) => {
        dispatch(requestCollectionList());
        return fetch(archivesUrl())
            .then(response => response.json())
            .then(json => dispatch(receiveCollectionList(json)))
            .then(() => dispatch(fetchSubjectList()));
    };
}

export const REQUEST_SUBJECT_LIST = 'REQUEST_SUBJECT_LIST';
function requestSubjectList() {
    return {type: REQUEST_SUBJECT_LIST};
}

export const RECEIVE_SUBJECT_LIST = 'RECEIVE_SUBJECT_LIST';
function receiveSubjectList(json) {
    return {type: RECEIVE_SUBJECT_LIST, json};
}

export function fetchSubjectList() {
    return (dispatch, getState) => {
        return fetch(subjectsUrl(getState().collection.collection_id))
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

export const NEXT_SUBJECT = 'NEXT_SUBJECT';
export function nextSubject() {
    return {type: NEXT_SUBJECT};
}

export function skipSubject() {
    return (dispatch, getState) => {
        if (getState().form.subjectIndex < getState().form.subjects.length - 1) {
            return dispatch(nextSubject());
        } else {
            return dispatch(fetchSubjectList());
        }
    };
}

export const SUBMIT_SUBJECT = 'SUBMIT_SUBJECT';
export function submitSubject() {
    return {type: SUBMIT_SUBJECT};
}
