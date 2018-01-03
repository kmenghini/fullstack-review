const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
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

// let userSchema = mongoose.Schema({
//   id: Number,
//   username: String
//   //also need to link back to repos stored in an array
// });

let Repo = mongoose.model('Repo', repoSchema);
// let User = mongoose.model('User', userSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;