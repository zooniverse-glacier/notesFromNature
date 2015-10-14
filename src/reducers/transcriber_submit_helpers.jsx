export function runFieldLevelSubmitHelpers(state, collection) {
    let newState = Object.assign({}, state);
    collection.fields.map(function(field) {
        if (field.submitHelpers) {
            field.submitHelpers.map(function(helper) {
                helper(newState, field.name);
            });
        }
    });
    return newState;
}

export function formatDate(state, name) {
    const month = state.values[name + 'Month'] || '00',
          day   = state.values[name + 'Day']   || '00',
          year  = state.values[name + 'Year']  || '0000';
    state.values[name] = year + '-' + month + '-' + day;
}

export function validatePresent(state, name) {
}

export function validateDepth(state, name) {
}

export function validateAllPresent(state, name) {
}
