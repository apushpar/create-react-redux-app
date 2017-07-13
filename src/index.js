import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path="/" component={PostsIndex} />
    	</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
