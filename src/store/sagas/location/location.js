/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
  getLocationStart,
  getLocationSuccess,
  getLocationFail,
  getLocationSaga as getLocationSagaAction,
  editLocationStart,
  editLocationSuccess,
  editLocationFail,
  addLocationStart,
  addLocationSuccess,
  addLocationFail,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getLocationSaga(action) {
  yield put(getLocationStart());
  yield errorHandler({
    endpoint: `/locations/all`,
    successHandler: yield function* (response) {
      yield put(getLocationSuccess(response.data));
    },
    failHandler: getLocationFail,
    apiType: 'get',
  });
}

export function* addLocationSaga(action) {
  yield put(addLocationStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/locations`,
    successHandler: yield function* (response) {
      yield put(addLocationSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getLocationSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addLocationFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editLocationSaga(action) {
  yield put(editLocationStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/locations/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editLocationSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editLocationFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}