import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

// utils
import history from 'services/history.service'

// pages
import HomePage from 'components/pages/homePage'
import NotFoundPage from 'components/pages/notFoundPage'
import ProfilePage from './pages/profilePage'
import WelcomePage from 'components/pages/welcomePage'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/welcome' component={WelcomePage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App