const Agent = require('../src/agent.js');
const Storage = require('../src/storage.js');
var credentials;

if(process.env.USERNAME && process.env.TOKEN) { 
  credentials = {
    username: process.env.USERNAME,
    token: process.env.TOKEN
  };
}
else { 
  credentials = require('../auth.json');
}

// the repo to analyse
const ownerToAnalyse = 'angular';
const repoToAnalyse = 'angular.js';

// the repo that will be push
const ownerToPush = 'edwardransome';
const repotoPush = 'GithubAnalytics_Client';

const storage = new Storage(ownerToPush, credentials.token, repotoPush);

const agent = new Agent(credentials);
const content = [];

agent.fetchAndProcessAllPullRequests(ownerToAnalyse, repoToAnalyse, (err, pullRequests) => {
  const oneDayInMilliSecond = 24 * 60 * 60 * 1000;

  Object.keys(pullRequests).forEach((key) => {
    const pullRequest = pullRequests[key];
    // calculation of the duration of an PR
    const dateEnd = (pullRequest.state === 'closed' && pullRequest.merged_at != null) ?
      new Date(pullRequest.merged_at).getTime()
      : new Date().getTime();

    const theDuration = Math.ceil((dateEnd - (
      new Date(pullRequest.created_at)).getTime()) / (oneDayInMilliSecond));

    content.push({
      id: pullRequest.id,
      title: pullRequest.title,
      created_at: pullRequest.created_at,
      updated_at: pullRequest.updated_at,
      merged_at: pullRequest.merged_at,
      duration: theDuration,
      state: pullRequest.state,
    });
  });

  storage.publish('docs/json/angular_angularTEST.js.json', JSON.stringify(content), 'new version of data', () => {
  });
});
