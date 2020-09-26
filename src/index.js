import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Reducers go here

const initialState = {
  feeling: '',
  understand: '',
  support: '',
  comment: '',
};

const valuesReducer = (state = initialState, action) => { // why doesn't the state value get set to blanks from 
  console.log('valuesReducer', state, action);            // the initialState everytime valuesReducer is called?
  if(action.type === "SET_FEELING"){
    return {
      ...state,
      feeling: action.payload,
    }
  }

  if(action.type === "SET_UNDERSTAND"){
    return {
      ...state,
      understand: action.payload,
    }
  }

  if(action.type === "SET_SUPPORT"){
    return {
      ...state,
      support: action.payload,
    }
  }

  if(action.type === "SET_COMMENT"){
    return {
      ...state,
      comment: action.payload,
    }
  }

  // console.log('redux state is now:', state); this doesn't
  // seem to work as I expected
  return state;
}


const storeInstance = createStore( // This isn't needed if only 1 reducer is used right?
  combineReducers({
    valuesReducer,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
