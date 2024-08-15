import './index.css'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import {thunk }from 'redux-thunk'; // This is correct for named exports.

import reducers from './reducers'

const store  = createStore(reducers , compose(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App/>
    </Provider>
)
