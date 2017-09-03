import React, { Component } from 'react';


// functional component example - just a function. start of with functional components first then refactor if you need more complex actions
// const SearchBar = () => {
//   return <input/>;
// };


// Class component example - allows higher level actions
class SearchBar extends Component {

  // using super allows us to call the parent method
  // this.state is creating a new object
  // only inside a contructor function can we declare changes to state

  constructor (props) {
    super(props);

    this.state = { term: '' };
  }


  // example below without using arrow function
  // render() {
  //   return <input onChange={this.onInputChange} />;
  // }

  // can name event below anything we want, but event is common.
  // can use onInputChange or handleInputChange, both are common.
  // onInputChange(event) {
  //   console.log(event);
  // }


  // example below with arrow function
  // this.setState is informing React that the state is changing and this is what it's changing to.
  // calling this.setState automatically causes the component to re-render and pushes the new information in the render method into the DOM.
  // adding the value={this.state.term} makes this a controlled form element. this is setting the NEW value of the input when the state re-renders.

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange( event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
