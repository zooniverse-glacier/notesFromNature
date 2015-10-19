export function subjectsUrl(collection_id) {
    return `${baseUrl()}/groups/${collection_id}/subjects?limit=10`;
}

export function archivesUrl() {
    return `${baseUrl()}/groups/?type=archive`;
}

export function talkUrl(zooniverseId) {
    return `http://talk.notesfromnature.org/#/subjects/${zooniverseId}`;
}

function baseUrl() {
    const host = window.location.hostname.toLowerCase();
    let url = `https://dev.zooniverse.org/projects/notes_from_nature`;
    if (host.indexOf('notesfromnature.org') >  -1) {
        url = `https://api.zooniverse.org/projects/notes_from_nature`;
    }
    return url;
}
