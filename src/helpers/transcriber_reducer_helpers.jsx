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
            name: subject.metadata.name,
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

export function setCurrentCollection(nextState) {
    // TODO This is clearly a temporary hack
    // Get the collection name from another source and use a lowercase version of that for searching
    let i = nextState.collections.findIndex(collection => collection.name == 'Crabs');
    return Object.assign(nextState, collections.Crabs, {
        collectionId: nextState.collections[i].id,
        name: nextState.collections[i].name,
        workflowId: nextState.collections[i].workflow_ids[0],
        zooniverseId: nextState.collections[i].zooniverse_id,
    });
}

export function nextSubject(nextState, collection) {
    nextState = Object.assign(nextState, {
        started: new Date(),
        errors: [],
        values: {},
        submitClicked: false,
        skipClicked: false,
    });
    nextState.subjectIndex += 1;
    nextState.subject = nextState.subjects[nextState.subjectIndex];
    if (collection.imageSort) {
        collection.imageSort(nextState.subject.images);
    }
    nextState.imageSelected = nextState.subject.images[0];
    return nextState;
}
