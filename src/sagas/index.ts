import { fork, all } from 'redux-saga/effects';

import startup from './startup';
import login from './login';
import Contact from './contact';

const sagas = [startup, login, Contact];

export default function*() {
  yield all(sagas.map(saga => fork(saga)));
}
