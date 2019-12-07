import React from 'react'
import classnames from 'classnames'
import Paginate from 'react-paginate'
import { useIssuesDisplay, setCurrentPage } from 'redux/issuesDisplay'
import { useIssues } from 'redux/issues'
import styles from './IssuePagination.module.css'
import './IssuePagination.css'

export const IssuePagination = () => {
  const { pageCount = 1 } = useIssues()
  const { page } = useIssuesDisplay()

  return <div className={classnames('issuesPagination', styles.pagination)}>
    <Paginate
      forcePage={page - 1}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      nextLabel="&rarr;"
      previousLabel="&larr;"
    />
  </div>
}
