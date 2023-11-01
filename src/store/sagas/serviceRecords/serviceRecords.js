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

// export function* deleteBookingSaga(action) {
//   yield put(deleteBookingStart());
//   const { bookingId, setIsSubmitted } = action.payload;
//   yield errorHandler({
//     endpoint: `/visit/${bookingId}`,
//     successHandler: yield function* (response) {
//       yield put(deleteBookingSuccess({ bookingId,setIsSubmitted }));
//       if (setIsSubmitted) {
//         console.log("reached here");
//         setIsSubmitted(false);
//       }
//     },
//     failHandler: yield function* (response) {
//       yield put(deleteBookingFail(response));
//       console.log("reached here fail");
//       // setIsSubmitted(false);
//     },
//     failHandlerType: 'CUSTOM',
//     apiType: 'delete',
//     payload: {bookingIdId},
//   });
// }