import * as actionLabels from '../../actionLabels';

export const getVehicleStart = () => ({
  type: actionLabels.GET_VEHICLE_START,
});

export const getVehicleSaga = payload => ({
  type: actionLabels.GET_VEHICLE_SAGA,
  payload,
});

export const getVehicleSuccess = payload => ({
  type: actionLabels.GET_VEHICLE_SUCCESS,
  payload,
});

export const getVehicleFail = payload => ({
  type: actionLabels.GET_VEHICLE_FAIL,
  payload,
});

export const addVehicleStart = () => ({
  type: actionLabels.ADD_VEHICLE_START,
});

export const addVehicleSaga = payload => ({
  type: actionLabels.ADD_VEHICLE_SAGA,
  payload,
});

export const addVehicleSuccess = payload => ({
  type: actionLabels.ADD_VEHICLE_SUCCESS,
  payload,
});

export const addVehicleFail = payload => ({
  type: actionLabels.ADD_VEHICLE_FAIL,
  payload,
});

export const editVehicleStart = () => ({
  type: actionLabels.EDIT_VEHICLE_START,
});

export const editVehicleSaga = payload => ({
  type: actionLabels.EDIT_VEHICLE_SAGA,
  payload,
});

export const editVehicleSuccess = payload => ({
  type: actionLabels.EDIT_VEHICLE_SUCCESS,
  payload,
});

export const editVehicleFail = payload => ({
  type: actionLabels.EDIT_VEHICLE_FAIL,
  payload,
});

export const deleteVehicleStart = () => ({
  type: actionLabels.DELETE_VEHICLE_START,
});

export const deleteVehicleSaga = (vehicleId) => ({
  type: actionLabels.DELETE_VEHICLE_SAGA,
  payload: { vehicleId},
});

export const deleteVehicleSuccess = (vehicleId) => ({
  type: actionLabels.DELETE_VEHICLE_SUCCESS,
  payload : vehicleId
});

export const deleteVehicleFail = payload => ({
  type: actionLabels.DELETE_VEHICLE_FAIL,
  payload,
});
