import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Badge} from 'reactstrap';

export default class EventThumbnail extends React.Component {
  render () {
    return (
      <div className='event-thumbnail col-sm-12 col-md-6 col-xl-4'>
        <Card>
          <CardImg top width="100%" src={this.props.logo ? this.props.logo.url : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'} alt="Card image cap" />
          <CardBlock>
            <h1>{this.props.capacity}</h1>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle><Badge color="success">{this.props.organizerName}</Badge></CardSubtitle>
            <Link
              to={`/eventbrite/events/${this.props.id}`}
              className='btn btn-secondary pull-right'
            >
              More info
            </Link>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
