import React from 'react'
import { IssuesListPage } from './pages/IssuesListPage'
import { IssueDetailsPage } from './pages/IssueDetailsPage'

import './App.css'
import { useIssuesDisplay } from 'redux/issuesDisplay'

export const App: React.FC = () =>
  <div className="App">{
    useIssuesDisplay().displayType === 'issues'
      ? <IssuesListPage />
      : <IssueDetailsPage />
  }</div>
