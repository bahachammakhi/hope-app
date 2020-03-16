import { fork, all } from 'redux-saga/effects';
import donation from './donation';
import startup from './startup';
import login from './login';
import Contact from './contact';

const sagas = [startup, login, Contact,donation];

export default function*() {
  yield all(sagas.map(saga => fork(saga)));
}
