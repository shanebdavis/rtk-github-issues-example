import React from 'react'
import ReactMarkdown from 'react-markdown'
import classnames from 'classnames'
import { useComments } from 'redux/comments'
import { useIssuesDisplay, showIssuesList } from 'redux/issuesDisplay'
import { insertMentionLinks } from 'utils/stringUtils'
import { IssueComments } from './IssueDetailsLib/IssueComments'
import { IssueMeta } from './IssueDetailsLib/IssueMeta'
import { IssueLabels } from './IssueDetailsLib/IssueLabels'
import styles from './IssueDetailsLib/IssueDetailsPage.module.css'
import './IssueDetailsLib/IssueDetailsPage.css'

export const IssueDetailsPage = () => {
  const { issue } = useIssuesDisplay()
  const { comments, loading, error } = useComments()

  const backToIssueListButton =
    <button className="pure-button" onClick={showIssuesList}>
      Back to Issues List
    </button>

  return <div>{
    issue == null
      ? <div className="issue-detail--loading">
        {backToIssueListButton}
        <p>Loading...</p>
      </div>
      : <div className={classnames('issueDetailsPage', styles.issueDetailsPage)}>
        <h1 className="issue-detail__title">{issue.title}</h1>
        {backToIssueListButton}
        <IssueMeta issue={issue} />
        <IssueLabels labels={issue.labels} className={styles.issueLabels} />
        <hr className={styles.divider} />
        <div className={styles.summary}>
          <ReactMarkdown
            className={'testing'}
            source={insertMentionLinks(issue.body)}
          />
        </div>
        <hr className={styles.divider} />

        <ul>{
          (comments &&
            <IssueComments />
          ) || (loading &&
            <div className="issue-detail--loading">
              <p>Loading comments...</p>
            </div>
          ) || (error &&
            <div className="issue-detail--error">
              <h1>Could not load comments for issue #{issue.id}</h1>
              <p>{`${error}`}</p>
            </div>
          ) || null
        }</ul>
      </div>
  }</div>
}
