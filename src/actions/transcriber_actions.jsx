import fetch from 'isomorphic-fetch';
import { subjectsUrl, archivesUrl, postFormUrl } from 'helpers/url_helpers';
import * as helper from 'helpers/transcriber_action_helpers';
import $ from 'jquery';

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
        return fetch(subjectsUrl(getState().collection.collectionId))
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

export const POST_SKIP_SUBJECT = 'POST_SKIP_SUBJECT';
export function postSkipSubject() {
    return {type: POST_SKIP_SUBJECT};
}

export const PREVENT_SKIP_SUBJECT = 'PREVENT_SKIP_SUBJECT';
export function preventSkipSubject() {
    return {type: PREVENT_SKIP_SUBJECT};
}

export function skipSubject() {
    return (dispatch, getState) => {
        const form = getState().form,
            finalDispatch = helper.isLastSubject(form) ? nextSubject : fetchSubjectList;
        if (!form.skipClicked) {
            return dispatch(preventSkipSubject());
        } else {
            return Promise.all([
                dispatch(postSkipSubject()),
                $.post(
                    postFormUrl(getState().collection.workflow_id),
                    helper.skipSubjectData(getState().form),
                    'json'
                ),
                dispatch(finalDispatch()),
            ]);
        }
    };
}

export const POST_SUBMIT_SUBJECT = 'POST_SUBMIT_SUBJECT';
export function postSubmitSubject() {
    return {type: POST_SUBMIT_SUBJECT};
}

export const VALIDATE_SUBJECT = 'VALIDATE_SUBJECT';
export function validateSubject() {
    return {type: VALIDATE_SUBJECT};
}

export const PREVENT_SUBMIT_SUBJECT = 'PREVENT_SUBMIT_SUBJECT';
export function preventSubmitSubject() {
    return {type: PREVENT_SUBMIT_SUBJECT};
}

export function submitSubject() {
    return (dispatch, getState) => {
        const finalDispatch = helper.isLastSubject(getState().form) ?
            nextSubject : fetchSubjectList;
        dispatch(validateSubject());
        if (! getState().form.submitClicked && getState().form.errors.length) {
            return dispatch(preventSubmitSubject());
        } else {
            return Promise.all([
                dispatch(postSubmitSubject()),
                $.post(
                    postFormUrl(getState().collection.workflow_id),
                    helper.submitSubjectData(getState().form, getState().collection),
                    'json'
                ),
                dispatch(incrementCompleted()),
                dispatch(finalDispatch()),
            ]);
        }
    };
}
