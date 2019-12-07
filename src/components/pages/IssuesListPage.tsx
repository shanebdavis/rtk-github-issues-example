import React from 'react'
import { useIssues } from 'redux/issues'
import { RepoSearchForm } from './IssuesListLib/RepoSearchForm'
import { IssuesPageHeader } from './IssuesListLib/IssuesPageHeader'
import { IssuesList } from './IssuesListLib/IssuesList'
import { IssuePagination } from './IssuesListLib/IssuePagination'

export const IssuesListPage = () =>
  <div id="issue-list-page">
    <RepoSearchForm />
    <IssuesPageHeader />
    {useIssues().loading ? <h3>Loading...</h3> : <IssuesList />}
    <IssuePagination />
  </div>
