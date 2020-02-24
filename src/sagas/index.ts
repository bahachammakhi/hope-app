import { fork, all } from 'redux-saga/effects';

import startup from './startup';


const sagas = [startup];

export default function* () {
  yield all(sagas.map(saga => fork(saga)));
}