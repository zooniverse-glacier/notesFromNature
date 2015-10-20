export function subjectsUrl(collectionId) {
    return `${baseUrl()}/groups/${collectionId}/subjects?limit=10`;
}

export function archivesUrl() {
    return `${baseUrl()}/groups/?type=archive`;
}

export function talkUrl(zooniverseId) {
    return `http://talk.notesfromnature.org/#/subjects/${zooniverseId}`;
}

export function postFormUrl(workflowId) {
    return `${baseUrl()}/workflows/${workflowId}/classifications`;
}

function baseUrl() {
    const host = window.location.hostname.toLowerCase(),
        path = window.location.pathname.toLowerCase(),
        port = window.location.port,
        isDemo = host.indexOf('demo') > -1,
        isBeta = path.indexOf('beta') > -1;
    let url = `https://dev.zooniverse.org/projects/notes_from_nature`;
    if (host.indexOf('notesfromnature.org') >  -1 && port < 1024) {
        url = `https://api.zooniverse.org/projects/notes_from_nature`;
    }
    return url;
}
