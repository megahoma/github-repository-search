export interface RootState {
  notification: NotificationRootState
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
  full_name: string
  description: string | null
  html_url: string
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
}
export type FilterAction = {
  type: string
  payload: FilterRootState
}
export type DispatchFilterType = (args: FilterAction) => FilterAction
