export const START_TRANSCRIBING = 'START_TRANSCRIBING';
export const INCREMENT_COMPLETED = 'INCREMENT_COMPLETED';
export const SET_COLLECTION = 'SET_COLLECTION';

export const NEXT_SUBJECT = 'NEXT_SUBJECT';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const TOGGLE_HELP = 'TOGGLE_HELP';
export const SELECT_FIELD = 'SELECT_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SKIP_SUBJECT = 'SKIP_SUBJECT';
export const SUBMIT_SUBJECT = 'SUBMIT_SUBJECT';

export function startTranscribing() {
    return {type: START_TRANSCRIBING};
}

export function incrementCompleted() {
    return {type: INCREMENT_COMPLETED};
}

export function selectImage(image) {
    return {type: SELECT_IMAGE, imageSelected: image};
}

export function toggleHelp() {
    return {type: TOGGLE_HELP};
}

export function selectField(name) {
    return {type: SELECT_FIELD, fieldSelected: name};
}

export function updateField(name, value) {
    return {type: UPDATE_FIELD, name, value};
}

export function skipSubject() {
    return {type: SKIP_SUBJECT};
}

export function submitSubject() {
    return {type: SUBMIT_SUBJECT};
}
