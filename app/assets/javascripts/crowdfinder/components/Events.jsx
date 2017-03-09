// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDOM from 'react-dom';
import EventThumbnail from './EventThumbnail.jsx';
import Spinner from 'spin.js';
import 'whatwg-fetch';
import $ from 'jquery';
import {LinkContainer} from 'react-router-bootstrap';
import {Button, Pagination, PaginationItem, PaginationLink, CardDeck} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      currentPage: this.handleUndefinedPage(props.params.page)
    };
  }
  handleUndefinedPage (page) {
    return page !== undefined ? parseInt(page) : 1
  }
  changePage (offset) {
    this.setState({currentPage: this.state.currentPage + offset}, () => {
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
        $('.pagination').removeAttr('hidden')
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
  componentWillReceiveProps (nextProps) {
    const page = this.handleUndefinedPage(nextProps.params.page)// !== undefined ? parseInt(nextProps.params.page) : 1
    this.changePage(page - this.state.currentPage)
  }
  render () {
    let prevPage = this.state.currentPage - 1
    if (prevPage < 1) {prevPage = 1}
    const eventThumbnailNodes = this.state.events.map(event => {
      return (
        <EventThumbnail
          name={event.attributes.name}
          logo={event.attributes.logo}
          capacity={event.attributes.capacity}
          organizerName={event.attributes.organizer.name}
          id={event.id}
          key={event.id}
        />
      );
    });

    return (
      <div className='eventsContainer'>
        <h1>Events</h1>
        <ReactCSSTransitionGroup
          transitionName="events"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component={CardDeck}
        >
          {eventThumbnailNodes}
        </ReactCSSTransitionGroup>
        <Pagination hidden>
          <PaginationItem disabled={this.state.currentPage === 1}>
            <LinkContainer
              to={{pathname: `/eventbrite/events/page/${prevPage}`}}
              onClick={() => this.changePage(-1)}
            >
              <PaginationLink>Previous</PaginationLink>
            </LinkContainer>
          </PaginationItem>
          <PaginationItem>
            <LinkContainer
              to={{pathname: `/eventbrite/events/page/${this.state.currentPage + 1}`}}
              onClick={() => this.changePage(1)}
            >
              <PaginationLink>Next</PaginationLink>
            </LinkContainer>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
