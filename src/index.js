import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// 1. Install redux packages: redux react-redux redux-thunk redux-devtools-extension
// 2. Wrap our app in a <Provider />
// 3. Create a store, import it, and apply to provider as store prop
// Go to ./store/index.js