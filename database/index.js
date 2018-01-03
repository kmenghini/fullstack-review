const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  owner_login: String,
  url: String,
  description: String,
  stargazers_count: Number,
  stargazers_url: String,
  forks: Number,
  forks_url: String,
  contributors_url: String
  // user_id: //connect to other schema
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
  repoArr.forEach(function(repo) {
    Repo.create(repo);
  });
}

let sendTopRepos = (callback) => {
  var query = Repo.find({});
  query.limit(25);
  query.sort({stargazers_count: -1});
  query.exec(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}

module.exports.save = save;
module.exports.sendTopRepos = sendTopRepos;


// let userSchema = mongoose.Schema({
//   id: Number,
//   username: String
//   //also need to link back to repos stored in an array
// });

// let User = mongoose.model('User', userSchema);