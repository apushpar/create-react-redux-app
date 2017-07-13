import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import './index.css';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends Component {
	render() { return <div>Hello!</div> }
}

class Goodbye extends Component {
	render() { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
	    	<Route path="/hello" component={Hello} />
	    	<Route path="/goodbye" component={Goodbye} />
    	</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
