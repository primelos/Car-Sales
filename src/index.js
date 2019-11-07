import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import myReducer from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(myReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
