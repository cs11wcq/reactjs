import React from 'react';

//d8f462cc9388f44a83b77afeb74ba5779a261b5c82bf584f444ba0418c5584a2
class SearchBar extends React.Component
{
  state = {term:'cars'};

  onFormSubmit = event => {
    event.preventDefault(); //prevents page from refreshing itself
    this.props.subwaysandwich(this.state.term);
  }
  render() {

    return (
        <div className={"ui segment"}>
          <form onSubmit={(event)=>this.onFormSubmit(event)} className={"ui form"}>
            <div className={"field"}>
              <label>Image Search</label>
              <input type={"text"}
                     value={this.state.term}
                     onChange={(e)=>this.setState({term: e.target.value})}/>
            </div>
          </form>
        </div>
    )
  }
}

export default SearchBar;
