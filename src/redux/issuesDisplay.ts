import { useRedux } from 'hooks-for-redux'
import { Issue } from 'api/githubAPI'

interface CurrentDisplay { displayType: 'issues' | 'comments', issue?: Issue }
interface CurrentRepo { org: string, repo: string }
type IssuesDisplayState = { page: number } & CurrentDisplay & CurrentRepo

let initialState: IssuesDisplayState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues'
}

export const [
  useIssuesDisplay,
  { setCurrentRepo, setCurrentPage, setCurrentDisplayType, showIssueDetails, showIssuesList },
  issuesDisplayStore
] = useRedux(
  'issuesDisplay',

  initialState,
  {
    setCurrentRepo: (state, props: CurrentRepo) => Object.assign({}, state, props),
    setCurrentPage: (state, page: number) => Object.assign({}, state, { page }),
    setCurrentDisplayType: (state, props: CurrentDisplay) => Object.assign({}, state, props),
    showIssueDetails: (state, issue: Issue) => Object.assign({}, state, { displayType: 'comments', issue }),
    showIssuesList: (state) => Object.assign({}, state, { displayType: 'issues', issue: null }),
  }
)
