import React from 'react';
import axios from 'axios';
import SearchList from './searchList.jsx';
// import sampleQa from '.../sampleQA.js';
import sampleQa from './sampleQA.js';

export default class SearchQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      list: sampleQa.results,
    }
  }

  onSearch(search) {
    this.setState({search});
    console.log(this.state.search)
  }

  render() {
    return(
      <div id="search-qa">
        <form>
          <input type='search' placeholder='Search...' value={this.state.search} onChange={(e) => {this.onSearch(e.target.value)}}></input>
          <button type='submit' id='search-qa'>Search</button>
        </form>
        <div id="qa">
          {this.state.list.map((entry, i) => {

            return <SearchList key={i} entries={entry}/>}
          )}
        </div>
      </div>
    )
  }
}