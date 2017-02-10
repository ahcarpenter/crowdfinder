import React from 'react'
import ReactDOM from 'react-dom'
import Spinner from 'spin.js'
import {Button} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router'

export default class Event extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      event: {}
    };
  }
  loadEventFromServer () {
    const spinner = new Spinner().spin(document.getElementById('spinner'));

    fetch(`/eventbrite/events/${this.props.params.id}.json`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({event: json.data});
        spinner.stop();
      })
      .catch((err) => {
        console.error(err);
        spinner.stop();
      })
  }
  componentDidMount () {
    this.loadEventFromServer();
    setInterval(this.loadEventFromServer, 1800000);
  }
  render () {
    const event = this.state.event.attributes

    return (
      event ?
        <div className='event'>
          <h2>
            <a href={event.url} target="new">
              {event['long-name']}
            </a>
          </h2>
          <div className='event-description' dangerouslySetInnerHTML={{__html: event.description}} />
          <div className='col-sm-3 col-xs-6'>
            <h3>Start</h3>
            {event.start}
          </div>
          <div className='col-sm-3 col-xs-6'>
            <h3>End</h3>
            {event.end}
          </div>
          <div className='col-sm-3 col-xs-6'>
            <h3>Capacity</h3>
            {event.capacity}
          </div>
          <div className='col-sm-3 col-xs-6'>
            <h3>Organizer</h3>
            {event.organizer ? event.organizer.long_name : null}
          </div>
          <div className="event-show-page-buttons">
            <Button onClick={browserHistory.goBack}>Back</Button>
            <a className='btn btn-primary' href={event.url} target="new">
              View on EventBrite
            </a>
          </div>
        </div>
      : null
    );
  }
}
