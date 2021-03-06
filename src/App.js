import React from 'react';

import './styles/App.scss';

import { Provider } from 'react-redux'

import { Routes } from './router';

import { store } from './store';
import { initializeData } from './store/actions'

// load the movies
store.dispatch(initializeData());

const App = () => {
  return (
    <section>
      <Provider store={store}>
        <Routes />
      </Provider>
    </section>
  )
}

export default App