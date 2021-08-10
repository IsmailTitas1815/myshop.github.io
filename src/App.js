import './App.css';

import React from 'react'
import Routing from './Routing';
import Nav from './components/Nav';

import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Routing />
      </Provider>
    </Router>
  )
}

export default App;
