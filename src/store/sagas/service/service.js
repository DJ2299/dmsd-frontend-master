/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
  getServiceStart,
  getServiceSuccess,
  getServiceFail,
  getServiceSaga as getServiceSagaAction,
  editServiceStart,
  editServiceSuccess,
  editServiceFail,
  addServiceStart,
  addServiceSuccess,
  addServiceFail,
  getPartStart,
  getPartSuccess,
  getPartFail,
  getPartSaga as getPartSagaAction,
  editPartStart,
  editPartSuccess,
  editPartFail,
  addPartStart,
  addPartSuccess,
  addPartFail,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getServiceSaga(action) {
  yield put(getServiceStart());
  yield errorHandler({
    endpoint: `/services/all`,
    successHandler: yield function* (response) {
      yield put(getServiceSuccess(response.data));
    },
    failHandler: getServiceFail,
    apiType: 'get',
  });
}

export function* addServiceSaga(action) {
  yield put(addServiceStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/services`,
    successHandler: yield function* (response) {
      yield put(addServiceSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getServiceSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addServiceFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editServiceSaga(action) {
  yield put(editServiceStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/services/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editServiceSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editServiceFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* getPartSaga(action) {
  yield put(getPartStart());
  yield errorHandler({
    endpoint: `/parts/all`,
    successHandler: yield function* (response) {
      yield put(getPartSuccess(response.data));
    },
    failHandler: getPartFail,
    apiType: 'get',
  });
}

export function* addPartSaga(action) {
  yield put(addPartStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/parts`,
    successHandler: yield function* (response) {
      yield put(addPartSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getPartSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addPartFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editPartSaga(action) {
  yield put(editPartStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/parts/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editPartSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editPartFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}