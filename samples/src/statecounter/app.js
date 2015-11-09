var React = require('react'),
    ReactDOM = require('react-dom')

var App = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  increaseCounter: function() {
    this.setState({
      counter: this.state.counter+1
    });
  },
  render: function() {
    return (
      <h1 onClick={this.increaseCounter}>
        Counter: {this.state.counter}
      </h1>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
