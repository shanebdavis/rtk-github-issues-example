import React from 'react'
import ReactMarkdown from 'react-markdown'

import { insertMentionLinks } from 'utils/stringUtils'
import { UserWithAvatar } from 'components/partials/UserWithAvatar'

import styles from './IssueComments.module.css'
import { useComments } from 'redux/comments'

export const IssueComments = () => {
  const { comments = [] } = useComments()

  return <ul className={styles.commentsList}>
    {comments.map(comment =>
      <li key={comment.id}>    <div className={styles.comment}>
        <UserWithAvatar
          user={comment.user}
          classes={{ avatar: styles.avatar, username: styles.username }}
          orientation="horizontal"
        />

        <div className={styles.body}>
          <ReactMarkdown
            className="markdown"
            source={insertMentionLinks(comment.body)}
          />
        </div>
      </div>
      </li>
    )}
  </ul>
}
