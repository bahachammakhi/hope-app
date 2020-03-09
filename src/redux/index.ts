import { combineReducers, Reducer } from 'redux';

import { reducer as startup } from './startup';
import { reducer as login } from './login/login';
import { reducer as loginRequest } from './login/loginRequest';

export default combineReducers({
  startup,
  login,
  loginRequest,
});
