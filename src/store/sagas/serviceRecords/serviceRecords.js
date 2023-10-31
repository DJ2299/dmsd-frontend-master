/* eslint-disable no-unused-vars */
import { put,call } from 'redux-saga/effects';
import axios from 'axios';

import {

  getVisitSaga as getVisitSagaAction,
  getVisitStart,
  getVisitFail,
  getVisitSuccess,
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

