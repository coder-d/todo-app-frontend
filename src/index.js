import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './Components/Main'
import './style/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducer';
import App from './Components/App';
import thunk from 'redux-thunk';

	//provider provides state to any react component
import {Provider} from 'react-redux';
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))
