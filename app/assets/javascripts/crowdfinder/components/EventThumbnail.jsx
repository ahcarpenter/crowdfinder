import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

export default class EventThumbnail extends React.Component {
  render () {
    return (
      <div className='event-thumbnail col-xs-12 col-sm-6 col-lg-4'>
        <div className='thumbnail'>
          <div className='event-image' style={{ background: (this.props.logo ? `url(${this.props.logo.url}) no-repeat center center` : 'gray')  }}/>
          <div className='caption clearfix'>
            <h3 className='eventName'>
              {this.props.name}
            </h3>
            <h1 className='eventCapacity'>
              {this.props.capacity}
            </h1>
            <p>
              <span className='organizerName label label-info'>
                {this.props.organizerName}
              </span>
              <Link
                to={`/eventbrite/events/${this.props.id}`}
                className='btn btn-default pull-right'
              >
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
