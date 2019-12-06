import React from 'react'
import { useIssues } from 'redux/issues'
import { RepoSearchForm } from '../partials/RepoSearchForm'
import { IssuesPageHeader } from '../partials/IssuesPageHeader'
import { IssuesList } from '../partials/IssuesList'
import { IssuePagination } from '../partials/IssuePagination'

export const IssuesListPage = () => {
  const { isLoading } = useIssues()

  return <div id="issue-list-page">
    <RepoSearchForm />
    <IssuesPageHeader />
    {isLoading ? <h3>Loading...</h3> : <IssuesList />}
    <IssuePagination />
  </div>
}
