class EventList extends React.Component {
  organizerName (id) {
    for (let include of this.props.included) {
      if (include.type === 'eventbrite-organizers' && include.id == id) {
        return include.attributes.name;
      }
    }
  }
  render () {
    var eventNodes = this.props.data.map( event => {
      return (
        <Event name={event.attributes.name}
               logo={event.attributes.logo}
               capacity={event.attributes.capacity}
               organizerName={this.organizerName(event.relationships.organizer.data.id)}
               id={event.id}
               key={event.id}>
        </Event>
      );
    });
    return (
      <div className='eventList'>
        {eventNodes}
      </div>
    );
  }
}

