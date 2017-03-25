import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)