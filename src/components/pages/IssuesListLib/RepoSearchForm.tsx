import React from 'react'
import { useTextField } from '../../../utils/hooks'
import { setCurrentPage, setCurrentRepo, useIssuesDisplay } from '../../../redux/issuesDisplay'
import './pure-forms.css'
import './pure-buttons.css'

const buttonProps = {
  className: "pure-button pure-button-primary",
  style: { marginLeft: 5 }
}

export const RepoSearchForm = () => {
  const { org, repo } = useIssuesDisplay()
  const orgInput = useTextField(org)
  const repoInput = useTextField(repo)
  const pageInput = useTextField('1')
  const page = parseInt(pageInput.value)

  return <form className="pure-form">
    <div>
      <label htmlFor="org" style={{ marginRight: 5 }}>
        Org:
      </label>
      <input name="org" {...orgInput} />

      <label htmlFor="repo" style={{ marginRight: 5, marginLeft: 10 }}>
        Repo:
      </label>
      <input name="repo" {...repoInput} />

      <button type="button" {...buttonProps} onClick={
        () => setCurrentRepo({ repo: repoInput.value, org: orgInput.value })
      }>Load Repo</button>
    </div>

    <div style={{ marginTop: 5 }}>
      <label htmlFor="jumpToPage" style={{ marginRight: 5 }}>
        Issues Page:
      </label>
      <input type='number' name="jumpToPage" {...pageInput} />

      <button type="button" {...buttonProps} onClick={
        () => page >= 1 && setCurrentPage(page)
      }>Jump to Page</button>
    </div>
  </form>
}
