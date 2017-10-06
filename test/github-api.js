const chai = require('chai');
const request = require('superagent');
const { username, token } = require('../auth.json');

const should = chai.should();

const owner = 'lognaume'
const repo = 'HEIGVD-PRO-Project'
const url = `https://api.github.com/repos/${owner}/${repo}`;

describe('The GitHub API', () => {
  it('allows me to get a list of pull requests', (done) => {
    request
      .get(url)
      .auth(username, token)
      .set('Accept', 'application/vnd.github.v3+json')
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
});
