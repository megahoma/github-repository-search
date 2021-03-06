import React from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

import { setNotification } from './ducks/actions/notificationAction'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Notification from './components/Notification'
import Header from './components/Header'
import Loader from './components/Loader'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const [theme, setTheme] = React.useState<DefaultTheme>(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  React.useEffect(() => {
    dispatch(setNotification('This is a info message!', 'info', 5))

    setTimeout(() => {
      dispatch(setNotification('This is a success message!', 'success', 5))
    }, 2000)
    setTimeout(() => {
      dispatch(setNotification('This is a error message!', 'error', 5))
    }, 3000)
  }, [dispatch])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyle />

          <Notification />
          <Loader />
          <Header toggleTheme={toggleTheme} titleTheme={theme.title} />

          <Routes />
        </HashRouter>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
