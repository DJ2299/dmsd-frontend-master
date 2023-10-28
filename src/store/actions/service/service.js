import * as actionLabels from '../../actionLabels';

export const getServiceStart = () => ({
  type: actionLabels.GET_SERVICE_START,
});

export const getServiceSaga = payload => ({
  type: actionLabels.GET_SERVICE_SAGA,
  payload,
});

export const getServiceSuccess = payload => ({
  type: actionLabels.GET_SERVICE_SUCCESS,
  payload,
});

export const getServiceFail = payload => ({
  type: actionLabels.GET_SERVICE_FAIL,
  payload,
});

export const addServiceStart = () => ({
  type: actionLabels.ADD_SERVICE_START,
});

export const addServiceSaga = payload => ({
  type: actionLabels.ADD_SERVICE_SAGA,
  payload,
});

export const addServiceSuccess = payload => ({
  type: actionLabels.ADD_SERVICE_SUCCESS,
  payload,
});

export const addServiceFail = payload => ({
  type: actionLabels.ADD_SERVICE_FAIL,
  payload,
});

export const editServiceStart = () => ({
  type: actionLabels.EDIT_SERVICE_START,
});

export const editServiceSaga = payload => ({
  type: actionLabels.EDIT_SERVICE_SAGA,
  payload,
});

export const editServiceSuccess = payload => ({
  type: actionLabels.EDIT_SERVICE_SUCCESS,
  payload,
});

export const editServiceFail = payload => ({
  type: actionLabels.EDIT_SERVICE_FAIL,
  payload,
});

export const getPartStart = () => ({
  type: actionLabels.GET_PART_START,
});

export const getPartSaga = payload => ({
  type: actionLabels.GET_PART_SAGA,
  payload,
});

export const getPartSuccess = payload => ({
  type: actionLabels.GET_PART_SUCCESS,
  payload,
});

export const getPartFail = payload => ({
  type: actionLabels.GET_PART_FAIL,
  payload,
});

export const addPartStart = () => ({
  type: actionLabels.ADD_PART_START,
});

export const addPartSaga = payload => ({
  type: actionLabels.ADD_PART_SAGA,
  payload,
});

export const addPartSuccess = payload => ({
  type: actionLabels.ADD_PART_SUCCESS,
  payload,
});

export const addPartFail = payload => ({
  type: actionLabels.ADD_PART_FAIL,
  payload,
});

export const editPartStart = () => ({
  type: actionLabels.EDIT_PART_START,
});

export const editPartSaga = payload => ({
  type: actionLabels.EDIT_PART_SAGA,
  payload,
});

export const editPartSuccess = payload => ({
  type: actionLabels.EDIT_PART_SUCCESS,
  payload,
});

export const editPartFail = payload => ({
  type: actionLabels.EDIT_PART_FAIL,
  payload,
});
