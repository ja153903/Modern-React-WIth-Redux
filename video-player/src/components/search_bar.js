// we need to make sure react is in the scope of this file
import React, { Component } from 'react';

// functional component because it is literally a function
// const SearchBar = () => {
//   return <input />; // generates an HTML input
// };

// Gives our search bar functionality from the react.component class
class SearchBar extends Component {

  // each class based component has its own state object
  constructor(props) {
    super(props); // inherits from Component

    // search term will be updated here
    this.state = { term: '' }; // initialized with an object
  }

  render() {
    // needed to make sure this class
    // can create some JSX

    // we use setState function to update the state of our object

    // Our input tells the state that it should change
    // a controlled component has its value changed by state
    // having the value allows us to change the value readily
    // and gives us access to a definite input through the state.term variable
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}
// export the component back to index.js
export default SearchBar;
