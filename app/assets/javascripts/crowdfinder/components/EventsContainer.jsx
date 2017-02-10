// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import EventList from './EventList.jsx'
import Spinner from 'spin.js'
import 'whatwg-fetch'
import $ from 'jquery'
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class EventsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      currentPage: props.params.page !== undefined ? props.params.page : 1
    };
  }
  changePage (offsetFromCurrentPage) {
    this.setState({currentPage: parseInt(this.state.currentPage) + parseInt(offsetFromCurrentPage)}, () => {
      this.loadEventsFromServer()
    });
  }
  loadEventsFromServer () {
    const spinner = new Spinner().spin(document.getElementById('spinner'));

    fetch('/eventbrite/events/page/' + this.state.currentPage + '.json')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({events: json.data});
        spinner.stop();
        $('.pager').removeAttr('hidden')
      })
      .catch((err) => {
        console.error(err);
        spinner.stop();
      })
  }
  componentDidMount () {
    this.loadEventsFromServer();
    setInterval(this.loadEventsFromServer, 1800000);
  }
  render () {
    return (
      <div className='eventsContainer'>
        <EventList events={this.state.events} />
        <ul hidden className="pager">
          <li>
            <LinkContainer
              disabled={this.state.currentPage === 1}
              to={{pathname: `/eventbrite/events/page/${this.state.currentPage - 1}`}}
              onClick={() => this.changePage(-1)}
            >
              <Button>Previous</Button>
            </LinkContainer>
          </li>
          {' '}
          <li>
            <LinkContainer
              to={{pathname: `/eventbrite/events/page/${this.state.currentPage + 1}`}}
              onClick={() => this.changePage(1)}
            >
              <Button>Next</Button>
            </LinkContainer>
          </li>
        </ul>
      </div>
    );
  }
}
