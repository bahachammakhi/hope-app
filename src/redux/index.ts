import { combineReducers, Reducer } from 'redux';
import { reducer as donation } from './Donations/donations';
import { reducer as startup } from './startup';
import { reducer as login } from './login/login';
import { reducer as loginRequest } from './login/loginRequest';
import { reducer as contact } from './contact/contactRequest';

export default combineReducers({
  startup,
  login,
  contact,
  loginRequest,
  donation,
});
