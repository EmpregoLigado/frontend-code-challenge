import 'whatwg-fetch';

function getJson(url) {
    return fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        return json;
    }).catch(function(err) {
    	// Error
    });
}

export { getJson };
