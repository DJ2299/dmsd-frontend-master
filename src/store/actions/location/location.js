import * as actionLabels from '../../actionLabels';

export const getLocationStart = () => ({
  type: actionLabels.GET_LOCATION_START,
});

export const getLocationSaga = payload => ({
  type: actionLabels.GET_LOCATION_SAGA,
  payload,
});

export const getLocationSuccess = payload => ({
  type: actionLabels.GET_LOCATION_SUCCESS,
  payload,
});

export const getLocationFail = payload => ({
  type: actionLabels.GET_LOCATION_FAIL,
  payload,
});

export const addLocationStart = () => ({
  type: actionLabels.ADD_LOCATION_START,
});

export const addLocationSaga = payload => ({
  type: actionLabels.ADD_LOCATION_SAGA,
  payload,
});

export const addLocationSuccess = payload => ({
  type: actionLabels.ADD_LOCATION_SUCCESS,
  payload,
});

export const addLocationFail = payload => ({
  type: actionLabels.ADD_LOCATION_FAIL,
  payload,
});

export const editLocationStart = () => ({
  type: actionLabels.EDIT_LOCATION_START,
});

export const editLocationSaga = payload => ({
  type: actionLabels.EDIT_LOCATION_SAGA,
  payload,
});

export const editLocationSuccess = payload => ({
  type: actionLabels.EDIT_LOCATION_SUCCESS,
  payload,
});

export const editLocationFail = payload => ({
  type: actionLabels.EDIT_LOCATION_FAIL,
  payload,
});
