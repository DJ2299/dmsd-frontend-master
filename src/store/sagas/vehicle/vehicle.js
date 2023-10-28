/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
  getVehicleStart,
  getVehicleSuccess,
  getVehicleFail,
  getVehicleSaga as getVehicleSagaAction,
  editVehicleStart,
  editVehicleSuccess,
  editVehicleFail,
  addVehicleStart,
  addVehicleSuccess,
  addVehicleFail,
  deleteVehicleFail,
  deleteVehicleStart,
  deleteVehicleSuccess
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getVehicleSaga(action) {
  console.log("🚀 ~ file: vehicle.js:15 ~ function*getVehicleSaga ~ action:", action)
  yield put(getVehicleStart());
  // const response = {
  //   data: [
  //     {
  //       vehicleId: 1,
  //       vehicleModel: "Test Model",
  //       vehicleType: "Test Type",
  //       manufacture: "Test manufacture",
  //       color: "Red",
  //       year: 2001
  //     },
  //     {
  //       vehicleId: 2,
  //       vehicleModel: "Test Model 1",
  //       vehicleType: "Test Type 1",
  //       manufacture: "Test manufacture 1",
  //       color: "Red 1",
  //       year: 2002
  //     },
  //     {
  //       vehicleId: 3,
  //       vehicleModel: "Test Model 2",
  //       vehicleType: "Test Type 2",
  //       manufacture: "Test manufacture 2",
  //       color: "Red 2",
  //       year: 2002
  //     }
  //   ]
  // }
  const id = action.payload ? action.payload.id : null;
  yield errorHandler({
    endpoint: id ? `/vehicle/user/${id}` : `/vehicle/all`,
    successHandler: yield function* (response) {
      yield put(getVehicleSuccess(response.data));
    },
    failHandler: getVehicleFail,
    apiType: 'get',
  });
}

export function* addVehicleSaga(action) {
  yield put(addVehicleStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/vehicle`,
    successHandler: yield function* (response) {
      yield put(addVehicleSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
        yield put(getVehicleSagaAction({ id: data.customerId }));
      }
    },
    failHandler: yield function* (response) {
      yield put(addVehicleFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: data,
  });
}

export function* editVehicleSaga(action) {
  yield put(editVehicleStart());
  const {
    data,
    setIsSubmitted,
    closeModel,
  } = action.payload;
  yield errorHandler({
    endpoint: `/vehicle/${data.vehicleId}`,
    successHandler: yield function* (response) {
      yield put(editVehicleSuccess({ data }));
      if (setIsSubmitted) {
        setIsSubmitted(false);
        closeModel();
      }
    },
    failHandler: yield function* (response) {
      yield put(editVehicleFail(response));
      setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'put',
    payload: data,
  });
}

export function* deleteVehicleSaga(action) {
  yield put(deleteVehicleStart());
  const { vehicleId, setIsSubmitted } = action.payload;
  yield errorHandler({
    endpoint: `/vehicle/${vehicleId}`,
    successHandler: yield function* (response) {
      yield put(deleteVehicleSuccess({ vehicleId,setIsSubmitted }));
      if (setIsSubmitted) {
        console.log("reached here");
        setIsSubmitted(false);
      }
    },
    failHandler: yield function* (response) {
      yield put(deleteVehicleFail(response));
      console.log("reached here fail");
      // setIsSubmitted(false);
    },
    failHandlerType: 'CUSTOM',
    apiType: 'delete',
    payload: {vehicleId},
  });
}
