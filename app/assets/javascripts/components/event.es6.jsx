class Event extends React.Component {
  render () {
    var logoUrl;
    if (this.props.logo) {
      logoUrl = <img src={this.props.logo.url} alt='logo' />
    } else {
      logoUrl = <img data-src='holder.js/400x200'
                     alt='placeholder'
                     ref={(img) => Holder.run({images: img})}/>
    }

    return (
      <div className='event col-sm-6 col-md-4'>
        <div className='thumbnail'>
          {logoUrl}
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
              <a className='btn btn-default pull-right'
                 href={'/eventbrite/events/'.concat(this.props.id)}>
                 More info
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

