import React from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from './ducks/actions/notificationAction'

import Notification from './components/Notification'

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setNotification('=)', 400, 3))
  }, [dispatch])

  return (
    <React.Fragment>
      <Notification />
    </React.Fragment>
  )
}

export default App
