var request = require("request");
var configFile = require("./auth.json");

owner = "lognaume";
repo = "HEIGVD-PRO-Project";
token = configFile.token;
console.log(token);
var githubUrl = "https://api.github.com/repos/" + owner + "/" + repo + "/pulls";

var headers = {
    "Accept": "application/vnd.github.v3+json"
}

var options = {
    url: githubUrl,
    method: "GET",
    headers: headers,
}


request.get(options, function (error, response, body){
    if(!error){
        console.log("Response code:");
        console.log(response.statusCode);
    }
})