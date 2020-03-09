import { fork, all } from 'redux-saga/effects';

import startup from './startup';
import login from './login';

const sagas = [startup, login];

export default function*() {
  yield all(sagas.map(saga => fork(saga)));
}
