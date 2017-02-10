// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import EventsContainer from './components/EventsContainer.jsx'
import Event from './components/Event.jsx'
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'

function NotFound() {
  return <h1>404.. This page is not found!</h1>
}

export default class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/(eventbrite/events/page/:page)' component={EventsContainer} />
        <Route path='/eventbrite/events(/:id)' component={Event} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}
