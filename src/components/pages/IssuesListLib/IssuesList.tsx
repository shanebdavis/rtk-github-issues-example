import React from 'react'
import {useIssues} from 'redux/issues'
import { IssueListItem } from './IssueListItem'
import styles from './IssuesList.module.css'

export const IssuesList = () => {
  const { issues = [] } =useIssues()
  const renderedIssues = issues.map(issue => (
    <li key={issue.id}>
      <IssueListItem {...{issue}} />
    </li>
  ))

  return <ul className={styles.issuesList}>{renderedIssues}</ul>
}
