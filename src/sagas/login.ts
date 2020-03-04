import { takeLatest, call, put, all } from 'redux-saga/effects';
import loginActions, { loginTypes } from '../redux/login/loginRequest';
import { Response } from '../redux/login/index';
import { loginRequest, setAuthorizationBearer } from '../requests';
import { AnyAction } from 'redux';

function* login(action: AnyAction) {
  console.log('start');
  try {
    const response: Response = yield call(loginRequest, {
      email: action.email,
      password: action.password,
    });
    if (response.code === 200) {
      localStorage.setItem('token', (response.data as any).token);
      setAuthorizationBearer(response.data.token as any);
      yield put(loginActions.loginSuccess({ data: response.data }));
    } else {
      yield put(loginActions.loginFailure({ error: response.message, data: null, fetching: false }));
    }
  } catch (e) {
    console.log(e);
  }
}
function logout() {
  setAuthorizationBearer(null);
  localStorage.removeItem('token');
}
export default function*() {
  yield takeLatest(loginTypes.loginRequest, login);
  yield takeLatest(loginTypes.logout, logout);
}
