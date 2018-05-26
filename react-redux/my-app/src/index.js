import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Index from './login/index'
import allReducers from './login/combineReducers'
//三个参数 reducer initState enhancestore
const store = createStore(allReducers,
    compose(applyMiddleware(thunk)
    ));

ReactDOM.render(
    <Provider store={store}>
    <Index />
    </Provider>,
    document.getElementById('root'));


registerServiceWorker();
