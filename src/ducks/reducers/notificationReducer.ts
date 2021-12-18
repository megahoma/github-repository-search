import { NotificationRootState, NotificationAction } from '../../types'

const initialState: NotificationRootState = {
  message: null,
  status: null,
}

const notificationReducer = (
  state: NotificationRootState = initialState,
  action: NotificationAction
): NotificationRootState => {
  switch (action.type) {
    case 'NEW-NOTIFICATION':
      return {
        message: action.payload.message,
        status: action.payload.status,
      }
    case 'CLEAR-NOTIFICATION':
      return {
        message: action.payload.message,
        status: action.payload.status,
      }
    default:
      return state
  }
}

export default notificationReducer
