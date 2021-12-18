export interface RootState {
  notification: NotificationRootState
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
