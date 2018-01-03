const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  var reposArr = [];
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(error, response, body) {
    console.log('url....', options.url);
 
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(body));
      reposArr = JSON.parse(body);
    }   
  })
  //async need to do this inside callback?
  console.log(reposArr);
  return reposArr;
}

module.exports.getReposByUsername = getReposByUsername;