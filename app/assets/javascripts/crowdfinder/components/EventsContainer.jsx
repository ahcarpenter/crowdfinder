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
import {Button} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class EventsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      currentPage: props.params.page !== undefined ? parseInt(props.params.page) : 1
    };
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
    if (nextProps.location.action === 'POP') {
      const page =  nextProps.params.page;
      this.changePage(parseInt(page) - this.state.currentPage)
    }
  }
  render () {
    let prevPage = this.state.currentPage - 1
    if (prevPage < 1) {prevPage = 1}

    return (
      <div className='eventsContainer'>
        <EventList events={this.state.events} />
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
                key=""
              >
                <PaginationLink>Next</PaginationLink>
              </LinkContainer>
            </PaginationItem>
          </Pagination>
      </div>
    );
  }
}
