import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigator/PlacesNavigator';
import placesReducer from './store/reducers/places';
import { init } from './helpers/db';

init().then(() => {
  console.log('Initialised Database!');
}).catch(err => {
  console.log('Initializing DB failed :(');
  console.log(err)
});

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
