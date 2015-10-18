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
    console.log(year, month, day);
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
    nextState.ready = nextState.archiveFetched && nextState.subjectListFetched && nextState.startClicked;
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

export function getNextSubject(nextState) {
}
