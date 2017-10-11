const Storage = require('../src/storage');
const { token } = require('../auth.json');
const should = require('chai').should();

describe('Storage', () => {
  it('should allow me to store a file on GitHub', (done) => {
    const repo = 'GithubAnalytics_Client';
    const owner = 'edwardransome';
    const storage = new Storage(owner, token, repo);
    const content = {
      random: Math.random(),
    };
    storage.publish('json/my-data-file.json', JSON.stringify(content), 'new version of data', (err, result) => {
      should.not.exist(err);
      should.exist(result);
      done();
    });
  });
});
