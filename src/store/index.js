import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk'

const middleware = [reduxThunk];

const store = createStore
    (rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
    ));

export default store

// 4. Go to https://github.com/zalmoxisus/redux-devtools-extension step 1.3 and copy the first example and paste it
// 5. Import 'rootReducer' and replace 'reducer' with 'rootReducer' in createStore
// 6. Import redux thunk and apply to middleware
// 7. Lastly export default store
// Go to ../index.js