import { call, put } from 'redux-saga/effects';

import {
  getProfileStart,
  getProfileSuccess,
  getProfileFail,
  // getCurrentUserProfileSaga as getCurrentUserProfileSagaAction,
  editProfileStart,
  editProfileSuccess,
  editProfileFail,
  logout,
  loginSuccess,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getProfileSaga(action) {
  yield put(getProfileStart());
  const id = action.payload ? action.payload.id : null;
  yield errorHandler({
    endpoint: `/users/getUserProfile/${id || ''}`,
    successHandler: yield function* (response) {
      yield put(getProfileSuccess(response.data));
    },
    failHandler: getProfileFail,
    apiType: 'get',
  });
}

export function* editProfileSaga(action) {
  yield put(editProfileStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/customers/${data.customerId}`,
    successHandler: yield function* (response) {
      if (data.phoneNumber) {
        yield put(logout({ logoutType: 'manual' }));
      } else {
        yield put(editProfileSuccess({ data }));
        // yield put(
        //   showModal({
        //     title: 'Edit Profile',
        //     open: true,
        //     notifyType: 2,
        //     message: response.msg,
        //   }),
        // );
        if (response.data.person.token) {
          yield call([localStorage, 'setItem'], 'authToken', response.data.person.token);
          yield call([localStorage, 'setItem'], 'data', JSON.stringify(response.data));
          yield call([localStorage, 'setItem'], 'userid', response.data.person.id);
        }
        const responseData = response.data.person !== undefined ? response.data.person : 
        response.data;
        setIsSubmitted(false);
        yield put(
          loginSuccess({
            token: response.data.token,
            ...responseData.person,
            // ...response.data,
            // ...response.data.userData,
          }),
        );
        window.location.reload();

        if (setIsSubmitted) {
          setIsSubmitted(false);
        }
      }
    },
    failHandler: yield function* (response) {
      yield put(editProfileFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}