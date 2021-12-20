import { RepoState, RepoAction } from '../../types'

const initialState: RepoState = {
  id: 0,
  full_name: '',
  owner: {
    id: 0,
    login: '',
    avatar_url: '',
    html_url: '',
    url: '',
    type: '',
  },
  html_url: '',
  url: '',
  description: null,
  created_at: '',
  updated_at: '',
  clone_url: '',
  stargazers_count: 0,
  language: null,
  forks_count: 0,
  license: null,
  topics: [],
  languageUsed: null,
}

const RepoReducer = (
  state: RepoState = initialState,
  action: RepoAction
): RepoState => {
  switch (action.type) {
    case 'NEW-REPO':
      return action.payload

    default:
      return state
  }
}

export default RepoReducer
