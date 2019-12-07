import React, { MouseEvent } from 'react'
import { Issue } from 'api/githubAPI'
import { shorten } from 'utils/stringUtils'
import { showIssueDetails } from 'redux/issuesDisplay'
import { IssueLabels } from 'components/pages/IssueDetailsLib/IssueLabels'
import { UserWithAvatar } from 'components/partials/UserWithAvatar'
import styles from './IssueListItem.module.css'

const pluralize = require('pluralize')

type Props = { issue: Issue }

export const IssueListItem = ({ issue }: Props) => {
  const onIssueClicked = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showIssueDetails(issue)
  }

  return (
    <div className={styles.issue}>
      <UserWithAvatar user={issue.user} />
      <div className="issue__body">
        <a href="#comments" onClick={onIssueClicked}>
          <span className={styles.number}>#{issue.number}</span>
          <span className={styles.title}>{issue.title}</span>
        </a>
        <br /> ({pluralize('comment', issue.comments, true)})
        <p className="issue__summary">{shorten(issue.body)}</p>
        <IssueLabels labels={issue.labels} className={styles.label} />
      </div>
    </div>
  )
}
