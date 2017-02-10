// let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import React from 'react'
import ReactDOM from 'react-dom'
import EventThumbnail from './EventThumbnail.jsx'

export default class EventList extends React.Component {
  render () {
    var eventThumbnailNodes = this.props.events.map(event => {
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
      <div className='eventList row'>
        <h1>Events</h1>
        {eventThumbnailNodes}
      </div>
    );
  }
}

