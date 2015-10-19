import { collections } from 'constants/collections';

export function runFieldLevelSubmitHelpers(nextState, collection) {
    nextState.errors = [];
    collection.fields.map(function(field) {
        if (field.submitHelpers) {
            field.submitHelpers.map(function(helper) {
                helper(nextState, field.name, field);
            });
        }
    });
}

export function validatePresent(nextState, name, field) {
    const value = nextState.values[name] || '';
    if (!value) {
        nextState.errors.push(`${field.label} is missing.`);
    }
}

export function validateDate(nextState, name, field) {
    const dateParts = (nextState.values[name] || '').split('-');
    let [year, month, day] = dateParts;
    let date = new Date(+year, +month - 1, +day);
    if (dateParts.length == 1 && year === '') {
        return;
    }
    if (!(+year && +month && +day)) {
        nextState.errors.push(`${field.label} is incomplete.`);
        return;
    }
    if (+year != date.getFullYear() || +month != (date.getMonth() + 1) || +day != date.getDate()) {
        nextState.errors.push(`${field.label} is an invalid date.`);
    }
}

export function isReady(nextState, readyFlags) {
    nextState.ready = nextState.subjectListFetched && nextState.startClicked;
}

export function reshapeSubjectList(json) {
    const subjects = json.filter(function(subject) { return subject; });
    return subjects.map(function(subject) {
        return {
            id: subject.id,
            zooniverseId: subject.zooniverse_id,
            images: subject.metadata.images.map(function(image){
                return image.location;
            }),
        };
    });
}

export function reshapeCollectionsList(json) {
    let collectionList = json.map(function(archive) {
        return Object.assign({}, archive, collections[archive.name]);
    });
    return collectionList;
}

export function updateCurrentCollection(nextState) {
    // TODO This is clearly a temporary hack
    // Get the collection name from window.location and use a lowercase version of that for searching
    let i = nextState.collections.findIndex(collection => collection.name == 'Crabs');
    return Object.assign(nextState, collections.Crabs, {collection_id: nextState.collections[i].id});
}

export function nextSubject(nextState) {
    nextState.subjectIndex += 1;
    nextState.subject = nextState.subjects[nextState.subjectIndex];
    console.log(nextState.subject);
    nextState.imageSelected = nextState.subject.images[0];
    return nextState;
}
