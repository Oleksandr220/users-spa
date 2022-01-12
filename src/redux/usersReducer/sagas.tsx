import { put, takeLeading, call } from '@redux-saga/core/effects';
import { addUser, ADD_USERS_ASYNC, setLoading } from './actions';
import getRandomaizer from '../../services/randomazerAPI';

export default function* watchUsers() {
  yield takeLeading(ADD_USERS_ASYNC, addUserSaga);
}

function* addUserSaga(action:any):any {
  yield put(setLoading(true));
  const data = yield call(getRandomaizer, action.data);
  yield put(addUser(data));
  yield put(setLoading(false));
}
