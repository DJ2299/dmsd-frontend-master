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
  deleteVisitStart,
  deleteVisitSuccess,
  deleteVisitFail,
  deleteVisitSaga as deleteVisitSagaAction,


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
  console.log("first line in edit visit saga.")
  yield put(editVisitStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  console.log("Insidee the edit visit saga")
  yield errorHandler({
    endpoint: `/visit/${data.appointmentId}`,
    successHandler: yield function* (response) {
      yield put(editVisitSuccess({ data }));
      console.log("inside edit")
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
      }
    },
    failHandler: yield function* (response) {
      console.log("inside fail")
      yield put(editVisitFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* deleteVisitSaga(action) {
  yield put(deleteVisitStart());
  const { appointmentId, setIsSubmitted } = action.payload;
  console.log("delete Visit Saga" + appointmentId)
  yield errorHandler({
    endpoint: `/appointments/${appointmentId}`,
    successHandler: yield function* (response) {
      yield put(deleteVisitSuccess({ appointmentId,setIsSubmitted }));
      if (setIsSubmitted) {
        console.log("delete Visit Saga here");
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(deleteVisitFail(response));
      console.log("delete Visit Saga  fail");
      // setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'delete',
    payload: {appointmentId},
  });
}