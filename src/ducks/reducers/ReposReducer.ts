import { ReposState, RepositoryAction } from '../../types'

const initialState: ReposState = {
  total_count: -1,
  items: [],
  language: [],
}

const ReposReducer = (
  state: ReposState = initialState,
  action: RepositoryAction
): ReposState => {
  switch (action.type) {
    case 'NEW-REPOS':
      return {
        total_count: action.payload.total_count,
        items: action.payload.items,
        language: action.payload.language.filter((el) => el !== null),
      }

    default:
      return state
  }
}

export default ReposReducer
