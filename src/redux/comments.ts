import { useRedux } from 'hooks-for-redux'
import { getComments } from '../api/githubAPI'
import { Comment } from 'api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'
import { setRepoDetails } from './repoDetails'

interface CommentsState {
  comments?: Comment[]
  loading?: boolean
  error?: string | null
}

const initialState: CommentsState = {}

export const [useComments, setComments] = useRedux('comments', initialState)

issuesDisplayStore.subscribe(({ issue }) => {
  if (issue == null) setComments(initialState)
  else {
    setComments({ loading: true })
    getComments(issue.comments_url).then(
      (comments) => setComments({ comments }),
      (error) => setComments({ error }),
    )
  }
})