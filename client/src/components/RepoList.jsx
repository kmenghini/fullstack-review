import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repos List </h4>
    There are {repos.length} repos.

    <div className="list">
      {
        repos.map(repo => (
          <Repo repo={repo}/>
        ))
      }
    </div>
  </div>
)

export default RepoList;