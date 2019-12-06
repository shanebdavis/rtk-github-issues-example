import { useRedux } from 'hooks-for-redux'
import { getComments } from '../api/githubAPI'
import { Comment } from 'api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'

// TODO: unify comments / repoDetails and issues-loading to all support 'loading' and 'error'
type CommentsState = Comment[]
const initialState: CommentsState = []

export const [useComments, setComments] = useRedux('comments', initialState)

issuesDisplayStore.subscribe(({ issue }) =>
  issue == null ? setComments([]) :
    getComments(issue.comments_url).then(setComments))