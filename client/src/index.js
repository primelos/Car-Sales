import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import myReducer from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(myReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, rootElement);
