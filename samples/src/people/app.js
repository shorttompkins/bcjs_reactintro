var React = require('react'),
    ReactDOM = require('react-dom')

var myPeople = [
  { name: 'Ben Spoon', twitter: 'benspoon' },
  { name: 'Evan DiPietro', twitter: 'evandipietro' },
  { name: 'Jim Fitzpatrick', twitter: 'fitzpatrick_j' }
]

var Person = React.createClass({
  render: function() {
    return (
      <div>
        <strong>{this.props.name}</strong> -
          <a href={'http://twitter.com/' + this.props.twitter}>
            @{this.props.twitter}
          </a>
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    var people = myPeople.map(function(person, i){
      return (
        <Person name={person.name} twitter={person.twitter} key={i} />
      )
    });
    console.log(people);
    return (
      <div>
        {people}
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
