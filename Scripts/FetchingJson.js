function fetchJSONFile(path, callback) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                const data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}
fetchJSONFile("https://hectormata.github.io/resume.github.io/Data/buttonsCount.json",console.log);
