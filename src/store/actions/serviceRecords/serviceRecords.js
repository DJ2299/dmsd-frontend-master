import * as actionLabels from '../../actionLabels';

export const getVisitStart = () => ({
  type: actionLabels.GET_VISIT_START,
});

export const getVisitSaga = payload => ({
  type: actionLabels.GET_VISIT_SAGA,
  payload,
});

export const getVisitSuccess = (payload) => ({
  type: actionLabels.GET_VISIT_SUCCESS,
  payload,
});

export const getVisitFail = payload => ({
  type: actionLabels.GET_VISIT_FAIL,
  payload,
});

console.log("inside edit actions")

export const editVisitStart = () => ({
  type: actionLabels.EDIT_VISIT_START,
});

export const editVisitSaga = payload => ({

  type: actionLabels.EDIT_VISIT_SAGA,
  payload,
  
});

export const editVisitSuccess = payload => ({
  type: actionLabels.EDIT_VISIT_SUCCESS,
  payload,
});

export const editVisitFail = payload => ({
  type: actionLabels.EDIT_VISIT_FAIL,
  payload,
});


export const deleteVisitStart = () => ({
  type: actionLabels.DELETE_VISIT_START,
});

export const deleteVisitSaga = (appointmentId) => ({
  type: actionLabels.DELETE_VISIT_SAGA,
  payload: {appointmentId},
});
console.log("Inside Service Records Actions")

export const deleteVisitSuccess = (appointmentId) => ({
  type: actionLabels.DELETE_VISIT_SUCCESS,
  payload : appointmentId
});

export const deleteVisitFail = payload => ({
  type: actionLabels.DELETE_VISIT_FAIL,
  payload,
});


