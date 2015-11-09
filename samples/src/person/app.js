var React = require('react'),
    ReactDOM = require('react-dom')

var Person = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <span>{this.props.twitter}</span>
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    return (
      <Person name='Jason' twitter='ShortTompkins' />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
