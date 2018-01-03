const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  var reposArr = [];
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(error, response, body) { 
    if (!error && response.statusCode === 200) {
      var mappedRepos = JSON.parse(body).map(repo => {
        return {
          '_id': repo.id,
          name: repo.name,
          owner_login: repo.owner.login,
          url: repo.url,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          stargazers_url: repo.stargazers_url,
          forks: repo.forks,
          forks_url: repo.forks_url,
          contributors_url: repo.contributors_url
        }
      });
      callback(mappedRepos);
    }   
  });
}

module.exports.getReposByUsername = getReposByUsername;