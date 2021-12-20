import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/main'
import RepoPage from './pages/repo'

const Routes = (): JSX.Element => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/:author/:name">
          <RepoPage />
        </Route>

        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
export default Routes
