import { combineReducers } from 'redux';

import loginReducer from './loginSlice';

const appReducer = combineReducers({
  loginReducer,
});
/* eslint-disable */
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.clear();
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
