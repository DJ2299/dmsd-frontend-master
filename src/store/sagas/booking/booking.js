/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
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
  getVisitSaga as getVisitSagaAction,
  getVisitStart,
  getVisitFail,
  getVisitSuccess,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getBookingSaga(action) {
  yield put(getBookingStart());
  const id = action.payload ? action.payload.id : null;
  yield errorHandler({
    endpoint: id
      ? `/visit/cust/${id}`
      //: action.payload 
     : `/visit/all`,
     
    successHandler:yield function* (response) {
      yield put(getBookingSuccess(response.data));
    },
    failHandler: getBookingFail,
    apiType: 'get',
  });
}

export function* getVisitSaga(action) {
  yield put(getBookingStart());
  
  const id = action.payload ? action.payload.id : null;
  yield errorHandler({
    endpoint: id
      ? `/appointments/cust/21`
      // : action.payload 
      :`/appointments/all`,
     
    successHandler:yield function* (response) {
      yield put(getVisitSuccess(response.data));
    },
    failHandler: getVisitFail,
    apiType: 'get',
  });
}

export function* addBookingSaga(action) {
  yield put(addBookingStart());
  const { data, setIsSubmitted, closeModel } = action.payload;
  yield errorHandler({
    endpoint: `/visit`,
    successHandler: yield function* (response) {
      yield put(addBookingSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getBookingSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addBookingFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editBookingSaga(action) {
  yield put(editBookingStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/appointments/${data.serviceId}`,
    successHandler: yield function* (response) {
      yield put(editBookingSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
      }
    },
    failHandler: yield function* (response) {
      yield put(editBookingFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* deleteBookingSaga(action) {
  yield put(deleteBookingStart());
  const { bookingId, setIsSubmitted } = action.payload;
  yield errorHandler({
    endpoint: `/visit/${bookingId}`,
    successHandler: yield function* (response) {
      yield put(deleteBookingSuccess({ bookingId,setIsSubmitted }));
      if (setIsSubmitted) {
        console.log("reached here");
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(deleteBookingFail(response));
      console.log("reached here fail");
      // setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'delete',
    payload: {bookingIdId},
  });
}

export function* collectPaymentSaga(action) {
  yield put(collectPaymentStart());
  const { data, setIsSubmitted } = action.payload;
  yield errorHandler({
    endpoint: `/appointments/Upmcc/${data.id}`,
    successHandler: yield function* (response) {
      yield put(collectPaymentSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
      window.location.reload();
    },
    failHandler: yield function* (response) {
      yield put(collectPaymentFail(response));
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}
