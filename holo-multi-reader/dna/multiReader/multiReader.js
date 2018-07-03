function genesis() {
    return true
}

function bridgeGenesis() {
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

function holoReceive(text) {
    debug("holoReceived: " + text)
 
    var hash = commit('holoText', text)
    return hash
}