import { call, put,takeLatest,all } from 'redux-saga/effects';
import {fetchData} from "./api";

export default function* fetchUsers(){
    try {
        const users = yield call(fetchData)
        yield put({ type:'REQUEST_DATA_SUCCESS', users })
      }
      catch(error) {
        yield put({ type: 'REQUEST_DATA_SUCCESS', error })
      }
}

// function* watchFetchUsers() {
//     yield takeLatest('REQUEST_DATA',fetchUsers);
// }

// export default function* rootSaga(){
//     yield all([watchFetchUsers()])
// }
