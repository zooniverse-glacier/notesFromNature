export function subjectsUrl(collectionId) {
    return `${projectUrl()}/groups/${collectionId}/subjects?limit=10`;
}

export function archivesUrl() {
    return `${projectUrl()}/groups/?type=archive`;
}

export function talkUrl(zooniverseId) {
    return `http://talk.notesfromnature.org/#/subjects/${zooniverseId}`;
}

export function postFormUrl(workflowId) {
    return `${projectUrl()}/workflows/${workflowId}/classifications`;
}

export function proxyUrl() {
    return `${getHost()}/proxy`;
}

function getHost() {
    const host = window.location.hostname.toLowerCase(),
        path = window.location.pathname.toLowerCase(),
        port = window.location.port,
        isDemo = host.indexOf('demo') > -1,
        isBeta = path.indexOf('beta') > -1;
    let url = `https://dev.zooniverse.org`;
    if (host.indexOf('notesfromnature.org') >  -1 && port < 1024) {
        url = `https://api.zooniverse.org`;
    }
    return url;
}

function projectUrl() {
    return `${getHost()}/projects/notes_from_nature`;
}
