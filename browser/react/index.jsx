import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import App from './components/App.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('app')
)