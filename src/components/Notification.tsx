import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../types'

const Notification = (): JSX.Element => {
  const notification = useSelector((state: RootState) => state.notification)

  if (notification.message === null) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <React.Fragment>
      {notification.message} | {notification.status}
    </React.Fragment>
  )
}

export default Notification
