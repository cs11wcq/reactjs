// Client Id below
// 950506296974-n0fijur69uraofpnk9d1nelafci1j8iu.apps.googleusercontent.com

import React from "react";
import {Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header.js';
import history from '../history';

//note: the colon in the StreamsEdit means its a variable
//so anything can come after the colon and it will still navigate to
//the StreamEdit page
const App = () => {
  return (
      <div className="ui container">
    <Router history = {history}>
      <div>
        <Header />
        <Route path = "/" exact component={StreamList} />
        <Route path = "/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
        <Route path="/streams/delete" exact component={StreamDelete}/>
        <Route path="/streams/show" exact component={StreamShow}/>

      </div>

    </Router>
    </div>
  )
};

export default App;

