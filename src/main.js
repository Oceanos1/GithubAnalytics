const credentials = require('../auth.json');
const Agent = require('../src/agent.js');
const Storage = require('../src/storage.js');


const ownerToAnalyse = 'angular';
const repoToAnalyse = 'angular.js';


// const ownerToAnalyse = 'lognaume';
// const repoToAnalyse = 'HEIGVD-PRO-Project';

const ownerToPush = 'edwardransome';
const repotoPush = 'GithubAnalytics_Client';

const storage = new Storage(ownerToPush, credentials.token, repotoPush);


const agent = new Agent(credentials);
const content = {
  allPullRequests: [],
};

agent.fetchAndProcessAllPullRequests(ownerToAnalyse, repoToAnalyse, (err, pullRequests) => {
  for (const i in pullRequests) {
    const pullRequest = pullRequests[i];

    content.allPullRequests.push({
      id: pullRequest.id,
      title: pullRequest.title,
      created_at: pullRequest.created_at,
      updated_at: pullRequest.updated_at,
      merged_at: pullRequest.merged_at,
      state: pullRequest.state,
    });
  }

  storage.publish('json/my-owner_repo.json', JSON.stringify(content), 'new version of data');
});
