import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import history from 'services/history.service'

import HomePage from 'components/pages/homePage'
import NotFoundPage from 'components/pages/notFoundPage'
import WelcomePage from 'components/pages/welcomePage'

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/welcome' component={WelcomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default App