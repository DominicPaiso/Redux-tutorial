import { combineReducers } from 'redux';
import videoReducer from './videoReducer';

export default combineReducers({
    video: videoReducer
});

// 8. Import combineReducers and export default reducers
// 9. Import reducers and place in combineReducers
// Go to ./videoReducer.js