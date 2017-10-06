const request = require("superagent");
const configFile = require("./auth.json");

const owner = "lognaume";
const repo = "HEIGVD-PRO-Project";
const url = "https://api.github.com/repos/${owner}/${repo}";
const token = configFile.token;
const username = configFile.username;
console.log(token);

const should = chai.should();

describe("the Github API", ()=>{
    it("allows me to get a list of pull requests", (done) => {
        request
            .get(url)
            .auth(username, token)
            .set("Accept", "application/vnd.github.v3+json")
            .end(err, res) => {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });
});
