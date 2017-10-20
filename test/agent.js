const chai = require('chai');
const credentials = require('../auth.json');
const Agent = require('../src/agent.js');

const owner = 'angular';
const repo = 'angular.js';

const should = chai.should();

describe('agent', () => {
  it('should fetch pull requests', (done) => {
    const agent = new Agent(credentials);
    agent.fetchAndProcessAllPullRequests(owner, repo, (err, pullRequests) => {
      should.not.exist(err);
      pullRequests.should.be.an('array');
      done();
    });
  });
});
