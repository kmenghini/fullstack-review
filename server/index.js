const express = require('express');
var bodyParser = require('body-parser');
let app = express();
var reposRequest = require('../helpers/github.js');
var db = require('../database/index.js'); 

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/repos', function (req, res) {
  reposRequest.getReposByUsername(req.body.username, (data) => {
    db.save(data);
    res.send('successfully added to database');    
  });
});

app.get('/repos', function (req, res) {
  db.sendTopRepos(function(repoArr) {
    res.send(repoArr);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

