class EventContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      included: [],
      meta: []
    };
  }
  loadEventsFromServer () {
    var spinner = new Spinner().spin(document.getElementById('spinner'));
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (response) => {
        this.setState({data: response.data, included: response.included, meta: response.meta});
        var pagination = document.getElementById('pagination');
        $(pagination).toggleClass('hidden');
      }.bind(this),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
      complete: () => {
        spinner.stop();
      }
    });
  }
  componentDidMount () {
    this.loadEventsFromServer();
    setInterval(this.loadEventsFromServer, this.props.pollInterval);
  }
  render () {
    return (
      <div className='eventContainer'>
        <EventList data={this.state.data} included={this.state.included} />
      </div>
    );
  }
}

ReactDOM.render(
  <EventContainer url={window.location.href} pollInterval={1800000}/>,
  document.getElementById('content')
);

