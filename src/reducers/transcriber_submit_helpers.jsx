export function runFieldLevelSubmitHelpers(state, collection) {
    let newState = Object.assign({}, state);
    newState.errors = [];
    collection.fields.map(function(field) {
        if (field.submitHelpers) {
            field.submitHelpers.map(function(helper) {
                helper(newState, field.name, field);
            });
        }
    });
    return newState;
}

export function validatePresent(state, name, field, label) {
    const value = state.values[name] || '';
    label = label || field.label;
    if (!value) {
        state.errors.push(`${label} is missing.`);
    }
}

export function validateDate(state, name, field) {
    const dateParts = (state.values[name] || '').split('-');
    let [year, month, day] = dateParts;
    let date = new Date(+year, +month - 1, +day);
    console.log(year, month, day);
    if (dateParts.length == 1 && year === '') {
        return;
    }
    if (!(+year && +month && +day)) {
        state.errors.push(`${field.label} is incomplete.`);
        return;
    }
    if (+year != date.getFullYear() || +month != (date.getMonth() + 1) || +day != date.getDate()) {
        state.errors.push(`${field.label} is an invalid date.`);
    }
}
