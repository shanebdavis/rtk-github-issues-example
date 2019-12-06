import { useRedux } from 'hooks-for-redux'
import { getIssues, Issue } from 'api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'

interface IssuesState {
  issues?: Issue[]
  currentPageIssues?: number[]
  pageCount?: number
  loading?: boolean
  error?: string | null
}

const initialState: IssuesState = {}

export const [useIssues, { setIssues }] = useRedux(
  'issues',
  initialState,
  {
    setIssues: (issues, patialIssues: IssuesState) =>
      Object.assign({}, issues, patialIssues)
  }
)

issuesDisplayStore.subscribe(({ org, repo, page }) => {
  setIssues({ loading: true, error: null })
  getIssues(org, repo, page)
    .then(
      (issues) => setIssues(issues),
      (error) => setIssues({ error }),
    )
    .finally(() => setIssues({ loading: false }))
})