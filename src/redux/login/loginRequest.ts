import { LoginState } from './index';
import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';

const INITIAL_STATE: LoginState = { fetching: false, data: null, error: '' };

const loginRequest = (state: LoginState) => ({
  ...state,
  error: '',
  fetching: true,
});
const loginSuccess = (state: LoginState, action: AnyAction) => ({
  ...state,
  fetching: false,
  data: action.data,
});
const loginFailure = (state: LoginState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
});
const logout = (state: LoginState, action: AnyAction) => INITIAL_STATE;
const { actions, types: loginTypes, reducer } = createRedux(INITIAL_STATE, {
  logout,
  loginFailure,
  loginRequest,
  loginSuccess,
});

export default actions;
export { loginTypes, reducer };
