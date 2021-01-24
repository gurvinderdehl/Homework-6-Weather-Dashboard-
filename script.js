var owmAPI = "839e3790699145d87b2fe7fa76e4baaf";
var currentCity = "";
var lastCity = "";

var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

