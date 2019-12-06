import { useRedux } from 'hooks-for-redux'
import { getRepoDetails } from 'api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'

interface RepoDetailsState {
  openIssuesCount?: number
  loading?: boolean
  error?: string
}

const initialState: RepoDetailsState = {}

export const [useRepoDetails, setRepoDetails] = useRedux('repoDetails', initialState)

issuesDisplayStore.subscribe(({ org, repo }) => {
  setRepoDetails({ loading: true })
  getRepoDetails(org, repo)
    .then(
      ({ open_issues_count: openIssuesCount }) => setRepoDetails({ openIssuesCount }),
      (error) => setRepoDetails({ error }),
    )
})