export interface RootState {
  notification: NotificationRootState
  repo: RepoState
  repos: ReposState
  isLoader: LoaderRootState
  filter: FilterRootState
}

export type NotificationRootState = {
  message: string | null
  status: number | null
}
export type NotificationAction = {
  type: string
  payload: NotificationRootState
}
export type DispatchNotificationType = (
  args: NotificationAction
) => NotificationAction

export type IRepository = {
  id: number
  full_name: string
  description: string | null
  html_url: string
  url: string
  topics: Array<string>
  stargazers_count: number
  language: string | null
  updated_at: string
}
export type ReposState = {
  total_count: number
  items: IRepository[]
  language: Array<string>
}
export type RepositoryAction = {
  type: string
  payload: ReposState
}
export type DispatchReposType = (args: RepositoryAction) => RepositoryAction

export type LoaderRootState = {
  status: boolean
}
export type LoaderAction = {
  type: string
  payload: LoaderRootState
}
export type DispatchLoaderType = (args: LoaderAction) => LoaderAction

export type FilterRootState = {
  language: string
  perPage?: Array<number>
  isPerPage: number
}
export type FilterAction = {
  type: string
  payload: FilterRootState
}
export type DispatchFilterType = (args: FilterAction) => FilterAction

export type IRepoOwner = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  url: string
  type: string
}
export type IRepoLicense = {
  key: string
  name: string
  spdx_id: string
  url: string
}
export type IRepoLanguage = {
  [key: string]: number
}
export type RepoState = {
  id: number
  full_name: string
  owner: IRepoOwner
  html_url: string
  url: string
  description: string | null
  created_at: string
  updated_at: string
  clone_url: string
  stargazers_count: number
  language: string | null
  forks_count: number
  license: IRepoLicense | null
  topics: Array<string>
  languageUsed: IRepoLanguage | null
}
export type RepoAction = {
  type: string
  payload: RepoState
}
export type DispatchRepoType = (args: RepoAction) => RepoAction
