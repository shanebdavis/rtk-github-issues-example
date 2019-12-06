import { useRedux } from 'hooks-for-redux'
import { getRepoDetails } from '../api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'

interface RepoDetailsState {
  openIssuesCount?: number
  loading?: boolean
  error?: string | null
}

const initialState: RepoDetailsState = {
  openIssuesCount: -1,
  error: null
}

export const [useRepoDetails, { setRepoDetails }] = useRedux(
  'repoDetails',
  initialState,
  {
    setRepoDetails: (repoDetails, patialState: RepoDetailsState) =>
      Object.assign({}, repoDetails, patialState)
  }
)

issuesDisplayStore.subscribe(({ org, repo }) => {
  setRepoDetails({ error: null, loading: true })
  getRepoDetails(org, repo)
    .then(
      ({ open_issues_count }) => setRepoDetails({ openIssuesCount: open_issues_count, loading: false }),
      (error) => setRepoDetails({ error, loading: false }),
    )
})