import React from 'react';

const Repo = ({repo}) => (
  <div className="repo">
    <a href={`https://github.com/${repo.owner_login}/${repo.name}`}>{repo.owner_login}/<b>{repo.name}</b></a>
    <div>{repo.description}</div>
    <div>
      <a href={`https://github.com/${repo.owner_login}/${repo.name}/stargazers`}>Stargazers: {repo.stargazers_count}</a>
      <a href={`https://github.com/${repo.owner_login}/${repo.name}/network`}>Forks: {repo.forks}</a>
      <a href={`https://github.com/${repo.owner_login}/${repo.name}/graphs/contributors`}>Link to contributors</a>
    </div>
    
  </div>
)

export default Repo;