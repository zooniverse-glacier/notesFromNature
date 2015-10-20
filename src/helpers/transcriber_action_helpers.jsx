export function skipSubjectData(form) {
    return Object.assign({}, {
        'classification[subject_ids][]': form.subject.id,
        'classification[annotations][0][skip]': true,
    }, classificationTail(form, 1));
}

export function submitSubjectData(form, collection) {
    const prefix = 'classification[annotations]';
    let n = 0,
        a = Object.assign({}, {'classification[subject_ids][]': form.subject.id});
    collection.fields.map(function (field) {
        if (field.name && form.values.hasOwnProperty(field.name)) {
            a[`${prefix}[${n}][step]`] = field.name;
            a[`${prefix}[${n}][value]`] = form.values[field.name];
            n += 1;
        }
    });
    a[`${prefix}[${n}][group][_id]`] = collection.collectionId;
    a[`${prefix}[${n}][group][name]`] = collection.name;
    a[`${prefix}[${n}][group][zooniverse_id]`] = collection.zooniverseId;
    Object.assign(a, classificationTail(form, n+1));
    return a;
}

function classificationTail(form, n) {
    const prefix = 'classification[annotations]';
    let a = {};
    a[`${prefix}[${n}][started_at]`] = form.started.toISOString();
    a[`${prefix}[${n}][finsihed_at]`] = form.finished.toISOString();
    a[`${prefix}[${n+1}][user_agent]`] = navigator.userAgent;
    return  a;
}

export function isLastSubject(form) {
    return form.subjectIndex < form.subjects.length - 1;
}
