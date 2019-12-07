import React from 'react'
import { useIssues } from 'redux/issues'
import { RepoSearchForm } from './IssuesListLib/RepoSearchForm'
import { IssuesPageHeader } from './IssuesListLib/IssuesPageHeader'
import { IssuesList } from './IssuesListLib/IssuesList'
import { IssuePagination } from './IssuesListLib/IssuePagination'

export const IssuesListPage = () => {
  const { loading, error } = useIssues()
  return error
    ? <div>
      <h1>Something went wrong...</h1>
      <div>{error.toString()}</div>
    </div>
    : <div id="issue-list-page">
      <RepoSearchForm />
      <IssuesPageHeader />
      {loading ? <h3>Loading...</h3> : <IssuesList />}
      <IssuePagination />
    </div>
}
