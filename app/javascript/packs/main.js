import React from 'react'
import ReactDOM from 'react-dom'
import Events from '../../assets/javascripts/crowdfinder/components/Events.jsx'
import Event from '../../assets/javascripts/crowdfinder/components/Event.jsx'
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import App from '../../assets/javascripts/crowdfinder/App.jsx'

function NotFound() {
  return <h1>404.. This page is not found!</h1>
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Events} />
      <Route path='eventbrite/events/page/:page' component={Events} />
      <Route path='eventbrite/events/:id' component={Event} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
, document.getElementById('content'))
