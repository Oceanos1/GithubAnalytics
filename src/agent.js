const request = require('superagent');


class Agent {
  constructor(credentials) {
    this.credentials = credentials;
  }

  fetchAndProcessAllPullRequests(owner, repo, allPullRequestsAreAvailable) {
    const targetUrl = `https://api.github.com/repos/${owner}/${repo}/pulls?state=all`;
    let pullRequests = [];
    function fetchAndProcessPage(pageUrl, credentials) {
      request
        .get(pageUrl)
        .auth(credentials.username, credentials.token)
        .end((err, res) => {
          pullRequests = pullRequests.concat(res.body);
          if (res.links.next) {
            fetchAndProcessPage(res.links.next, credentials);
          } else {
            allPullRequestsAreAvailable(null, pullRequests);
          }
        });
    }
    fetchAndProcessPage(targetUrl, this.credentials);
  }
}

// To have the constructor
module.exports = Agent;
