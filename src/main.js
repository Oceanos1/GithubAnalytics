const credentials = require('../auth.json');
const Agent = require('../src/agent.js');
const Storage = require('../src/storage');


const owner = 'angular';
const repo = 'angular.js';
const storage = new Storage(owner, credentials.token, repo);


const agent = new Agent(credentials);


agent.fetchAndProcessAllPullRequests(owner, repo, pullRequests);

const content = {
  id: pullRequests.body.id,
  title: pullRequests.body.title,
  created_at: pullRequests.body.created_at,
  updated_at: pullRequests.body.updated_at,
  merged_at: pullRequests.body.merged_at,
  state: pullRequests.body.state,
};

console.log(content);

// storage.publish('json/my-data-file.json', JSON.stringify(content), 'new version of data');
