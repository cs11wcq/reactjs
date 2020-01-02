import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import App from './components/App';
import reducers from './reducers';

/* //the following is just to log when the state changes
const store = createStore(reducers);
store.subscribe(() => {
  console.log('STORE STATE CHANGE', sto re.getState());
});
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>

    , document.querySelector('#root')
);
