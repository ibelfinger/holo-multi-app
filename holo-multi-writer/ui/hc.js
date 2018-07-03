function holoTextWrite(message, callback) {
    var xhr = new XMLHttpRequest();
    var url = '/fn/readerWriter/holoTextWrite';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText)
        }
    };
    xhr.send(message);
}

function holoTextRead(callback) {
    var xhr = new XMLHttpRequest()
    var url = '/fn/readerWriter/holoTextReadAll';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response);
        }
    };
    xhr.send();
}