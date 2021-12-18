import React from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from './ducks/actions/notificationAction'

import Notification from './components/Notification'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const [theme, setTheme] = React.useState<DefaultTheme>(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  React.useEffect(() => {
    dispatch(setNotification('=)', 200, 3))
    //dispatch(setNotification('=(', 400, 3))
  }, [dispatch])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Notification />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
