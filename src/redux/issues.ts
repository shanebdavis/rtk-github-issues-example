import { useRedux } from 'hooks-for-redux'
import { Issue, getIssues } from '../api/githubAPI'
import { Links } from 'parse-link-header'
import { issuesDisplayStore } from './issuesDisplay'

interface IssuesState {
  issues?: Issue[]
  currentPageIssues?: number[]
  pageCount?: number
  pageLinks?: Links | null
  isLoading?: boolean
  error?: string | null
}

const initialState: IssuesState = {
  issues: [],
  pageCount: 0,
  pageLinks: {},
  isLoading: false,
  error: null
}

export const [useIssues, { setIssues }] = useRedux(
  'issues',
  initialState,
  {
    setIssues: (issues, patialIssues: IssuesState) =>
      Object.assign({}, issues, patialIssues)
  }
)

issuesDisplayStore.subscribe(({ org, repo, page }) => {
  setIssues({ isLoading: true, error: null })
  getIssues(org, repo, page)
    .then(
      (issues) => setIssues(issues),
      (error) => setIssues({ error }),
    )
    .finally(() => setIssues({ isLoading: false }))
})