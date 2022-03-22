import React from 'react';
import ReactDOM from 'react-dom';
import App from './react5Assignment/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/react-toastify.cjs.development'
import {createStore} from 'redux'
import contactReducer from './redux/reducers/ContactReducer';
// import composeWithDevTools from 'redux-devtools-extension'
import { Provider } from 'react-redux';
const store = createStore(contactReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);