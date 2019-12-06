import React from 'react'
import { useRepoDetails } from 'redux/repoDetails'
import { useIssuesDisplay } from 'redux/issuesDisplay'
const pluralize = require('pluralize')

export const IssuesPageHeader = () => {
  const { openIssuesCount } = useRepoDetails()
  const { org, repo } = useIssuesDisplay()

  return <h1>
    <span>
      <span className="header__openIssues">{
        openIssuesCount == null
          ? "Open issues"
          : pluralize('open issue', openIssuesCount, true)
      }</span>
      {' for '}
      <span>
        <a href={`https://github.com/${org}`} className="header__org">{org}</a>
        {' / '}
        <a href={`https://github.com/${org}/${repo}`} className="header__repo">{repo}</a>
      </span>
    </span>
  </h1>
}
