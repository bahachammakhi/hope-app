import { fork, all } from 'redux-saga/effects';
import donation from './donation';
import startup from './startup';
import login from './login';
import Contact from './contact';
import createDonations from './createDonations';

const sagas = [startup, login, Contact,donation,createDonations];

export default function*() {
  yield all(sagas.map(saga => fork(saga)));
}
