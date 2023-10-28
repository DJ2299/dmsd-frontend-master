/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFail,
  getCustomerSaga as getCustomerSagaAction,
  editCustomerStart,
  editCustomerSuccess,
  editCustomerFail,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFail,
  getTechnicianStart,
  getTechnicianSuccess,
  getTechnicianFail,
  getTechnicianSaga as getTechnicianSagaAction,
  editTechnicianStart,
  editTechnicianSuccess,
  editTechnicianFail,
  addTechnicianStart,
  addTechnicianSuccess,
  addTechnicianFail,
  getManagerStart,
  getManagerSuccess,
  getManagerFail,
  getManagerSaga as getManagerSagaAction,
  editManagerStart,
  editManagerSuccess,
  editManagerFail,
  addManagerStart,
  addManagerSuccess,
  addManagerFail,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getCustomerSaga(action) {
  yield put(getCustomerStart());
  yield errorHandler({
    endpoint: `/customers/all`,
    successHandler: yield function* (response) {
      yield put(getCustomerSuccess(response.data));
    },
    failHandler: getCustomerFail,
    apiType: 'get',
  });
}

export function* addCustomerSaga(action) {
  yield put(addCustomerStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/customers`,
    successHandler: yield function* (response) {
      yield put(addCustomerSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getCustomerSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addCustomerFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editCustomerSaga(action) {
  yield put(editCustomerStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/customers/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editCustomerSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editCustomerFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* getTechnicianSaga(action) {
  yield put(getTechnicianStart());
  yield errorHandler({
    endpoint: `/technician/all`,
    successHandler: yield function* (response) {
      yield put(getTechnicianSuccess(response.data));
    },
    failHandler: getTechnicianFail,
    apiType: 'get',
  });
}

export function* addTechnicianSaga(action) {
  yield put(addTechnicianStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/technician`,
    successHandler: yield function* (response) {
      yield put(addTechnicianSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getTechnicianSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addTechnicianFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editTechnicianSaga(action) {
  yield put(editTechnicianStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/technician/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editTechnicianSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editTechnicianFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* getManagerSaga(action) {
  yield put(getManagerStart());
  yield errorHandler({
    endpoint: `/manager/all`,
    successHandler: yield function* (response) {
      yield put(getManagerSuccess(response.data));
    },
    failHandler: getManagerFail,
    apiType: 'get',
  });
}

export function* addManagerSaga(action) {
  yield put(addManagerStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/manager`,
    successHandler: yield function* (response) {
      yield put(addManagerSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getManagerSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addManagerFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editManagerSaga(action) {
  yield put(editManagerStart());
  const {
    data,
    setIsSubmitted,
  } = action.payload;
  yield errorHandler({
    endpoint: `/manager/${data.id}`,
    successHandler: yield function* (response) {
      yield put(editManagerSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(editManagerFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}