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

export function validatePresent(state, name) {
    state.values[name] = (state.values[name] || '').trim();
}

export function validateDate(state, name) {
    const month = state.values[name + 'Month'] || '',
          day   = state.values[name + 'Day']   || '',
          year  = state.values[name + 'Year']  || '';
    state.values[name] = year + '-' + month + '-' + day;
}

export function validateDepth(state, name) {
    //numberName = field.name + 'Number',
    //unitsName = field.name + 'Units';
}

export function validateGeographicCoordinates(state, name) {
    //latitudeName = field.name + 'Latitude',
    //longitudeName = field.name + 'Longitude';
}

export function validateIdentification(state, name) {
    //scientificName = field.name + 'ScientificName',
    //identifierName = field.name + 'Identifier';
}
