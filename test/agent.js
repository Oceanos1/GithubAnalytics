const chai = require('chai');
const credentials = require('../auth.json');
const Agent = require('../src/agent.js');

const owner2 = 'angular';
const repo2 = 'angularjs';


const owner = 'lognaume';
const repo = 'HEIGVD-PRO-Project';

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
