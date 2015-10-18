export function subjectsUrl(collection) {
    return `${baseUrl()}/groups/${collection.groupId}/subjects?limit=10`;
}

export function talkUrl(zooniverseId) {
    return `http://talk.notesfromnature.org/#/subjects/${zooniverseId}`;
}

export function archivesUrl() {
}

function baseUrl() {
    return `https://dev.zooniverse.org/projects/notes_from_nature/`;
}
