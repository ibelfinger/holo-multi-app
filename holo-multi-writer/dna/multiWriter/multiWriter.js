function genesis() {
    return true
}

function validateCommit() {
    return true
}

function validatePut() {
    return true
}

function validateLink() {
    return true
}

function validateLinkPkg() {
    return true
}

function holoTextWrite(text) {
    var hash = commit('holoText', text);
    var bridges = getBridges()
    debug("Bridges are: " + JSON.stringify(bridges));

    var calleeId = bridges[0].CalleeApp

    bridge(calleeId, "multiReader", "holoReceive", text);
    return hash
}

function bridgeGenesis() {
    var bridges = getBridges()
    debug("Bridges are: " + JSON.stringify(bridges));

    var calleeId = bridges[0].CalleeApp

    bridge(calleeId, "multiReader", "holoReceive", "Initial");

    return true
}