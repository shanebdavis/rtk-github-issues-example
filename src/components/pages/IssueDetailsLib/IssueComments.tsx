import React from 'react'
import ReactMarkdown from 'react-markdown'
import { insertMentionLinks } from 'utils/stringUtils'
import { UserWithAvatar } from 'components/partials/UserWithAvatar'
import styles from './IssueComments.module.css'
import { Comment } from 'api/githubAPI'

export const IssueComments = ({comments}:{comments: Comment[]}) =>
  <ul className={styles.commentsList}>
    {(comments || []).map(comment =>
      <li key={comment.id}>
        <div className={styles.comment}>
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
