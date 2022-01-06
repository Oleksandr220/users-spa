import { put, takeLeading, call } from '@redux-saga/core/effects';
import { addUserAsync, ADD_USERS_ASYNC, setLoading } from './actions';
import getRandomaizer from '../../services/randomazerAPI';

export default function* watchUsers() {
  yield takeLeading(ADD_USERS_ASYNC, addUserSaga);
}

function* addUserSaga() {
  yield put(setLoading(true));
  const data = yield call(getRandomaizer);
  yield put(addUserAsync(data));
  yield put(setLoading(false));
}
