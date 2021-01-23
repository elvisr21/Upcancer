import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
var initialState={
  Logged:false,
}
function reducer(state=initialState,action){
    switch(action.type){
        case "Signed":
            return{
                Logged:true,
            };
        case "NotSign":
            return state;
        default:
            return state;
        
    }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
