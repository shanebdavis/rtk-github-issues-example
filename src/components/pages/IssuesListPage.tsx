import React from 'react'
import { useIssues } from 'redux/issues'
import { RepoSearchForm } from '../partials/RepoSearchForm'
import { IssuesPageHeader } from '../partials/IssuesPageHeader'
import { IssuesList } from '../partials/IssuesList'
import { IssuePagination } from '../partials/IssuePagination'

export const IssuesListPage = () => {
  const { loading } = useIssues()

  return <div id="issue-list-page">
    <RepoSearchForm />
    <IssuesPageHeader />
    {loading ? <h3>Loading...</h3> : <IssuesList />}
    <IssuePagination />
  </div>
}
