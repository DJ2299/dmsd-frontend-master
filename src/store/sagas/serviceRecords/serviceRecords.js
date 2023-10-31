/* eslint-disable no-unused-vars */
import { put,call } from 'redux-saga/effects';
import axios from 'axios';

import {

  getVisitSaga as getVisitSagaAction,
  getVisitStart,
  getVisitFail,
  getVisitSuccess,
  editVisitSaga as editVisitSagaAction,
  editVisitStart,
  editVisitSuccess,
  editVisitFail,
  getBookingStart,
  getBookingSuccess,
  getBookingFail,
  getBookingSaga as getBookingSagaAction,
  editBookingStart,
  editBookingSuccess,
  editBookingFail,
  addBookingStart,
  addBookingSuccess,
  addBookingFail,
  deleteBookingStart,
  deleteBookingSuccess,
  deleteBookingFail,
  collectPaymentStart,
  collectPaymentSuccess,
  collectPaymentFail,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getVisitSaga(action) {
  yield put(getVisitStart());
  const id = action.payload ? action.payload.id : null;
  yield errorHandler({
    endpoint: id
      ? `/appointments/cust/${id}`
      //: action.payload 
     : `/appointments/all`,
     
    successHandler:yield function* (response) {
      yield put(getVisitSuccess(response.data));
    },
    failHandler: getVisitFail,
    apiType: 'get',
  });
}

export function* editVisitSaga(action) {
  yield put(editVisitStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/visit/${data.serviceId}`,
    successHandler: yield function* (response) {
      yield put(editVisitSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
      }
    },
    failHandler: yield function* (response) {
      yield put(editVisitFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}