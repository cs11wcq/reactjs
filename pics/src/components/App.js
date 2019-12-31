import React from 'react';
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component
{
  state = {images: []}
  onSearchSubmit = async (term) => {
    const response =  await unsplash.get('/search/photos', {
      params: {query: term },
    });
    console.log(this);
    this.setState({images: response.data.results})
  };
  render() {
    const styles = {margin: '10px', backgroundColor: 'white'};

    return (

        <div className={"ui container"} style={styles}>
          <SearchBar subwaysandwich={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
    )
  }

};

export default App;
