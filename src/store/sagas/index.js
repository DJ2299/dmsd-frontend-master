import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import {
  loginSaga,
  logoutSaga,
  authenticationValidatorSaga,
  signupSaga,
  getUserDetailSaga,
  editUserDetailSaga,
} from './auth/auth';
import { 
  addBookingSaga, collectPaymentSaga, editBookingSaga, getBookingSaga 
} from './booking/booking';
import { 
   getVisitSaga 
} from './serviceRecords/serviceRecords';
import { 
  addCustomerSaga, addManagerSaga, addTechnicianSaga,
  editCustomerSaga, editManagerSaga, editTechnicianSaga,
  getCustomerSaga, getManagerSaga, getTechnicianSaga
} from './user/user';
import { addLocationSaga, editLocationSaga, getLocationSaga } from './location/location';
import {
  editProfileSaga,
  getProfileSaga,
} from './profile/profile';
import { 
  addPartSaga, addServiceSaga, editPartSaga, editServiceSaga, getPartSaga, getServiceSaga
} from './service/service';
import {
  addVehicleSaga,
  editVehicleSaga,
  deleteVehicleSaga,
  getVehicleSaga,
} from './vehicle/vehicle';
import { 
  getReportLSRevenueSaga, getReportRevenueSaga, getReportTopRevenueSaga 
} from './report/report';

export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.SIGNUP_SAGA, signupSaga),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
    takeLatest(actionLabels.LOGOUT_SAGA, logoutSaga),
    takeLatest(actionLabels.GET_USER_DETAIL_SAGA, getUserDetailSaga),
    takeLatest(actionLabels.EDIT_USER_DETAIL_SAGA, editUserDetailSaga),
  ]);
}

export function* watchProfile() {
  yield all([
    takeLatest(actionLabels.GET_PROFILE_SAGA, getProfileSaga),
    takeEvery(actionLabels.EDIT_PROFILE_SAGA, editProfileSaga),
  ]);
}

export function* watchVehicle() {
  yield all([
    takeLatest(actionLabels.GET_VEHICLE_SAGA, getVehicleSaga),
    takeEvery(actionLabels.ADD_VEHICLE_SAGA, addVehicleSaga),
    takeEvery(actionLabels.EDIT_VEHICLE_SAGA, editVehicleSaga),
    takeEvery(actionLabels.DELETE_VEHICLE_SAGA, deleteVehicleSaga),
  ]);
}

export function* watchBooking() {
  yield all([
    takeLatest(actionLabels.GET_BOOKING_SAGA, getBookingSaga),
    takeEvery(actionLabels.ADD_BOOKING_SAGA, addBookingSaga),
    takeEvery(actionLabels.EDIT_BOOKING_SAGA, editBookingSaga),
    takeEvery(actionLabels.COLLECT_PAYMENT_SAGA, collectPaymentSaga),
  ]);
}

export function* watchServiceRecords() {
  yield all([
    takeLatest(actionLabels.GET_VISIT_SAGA, getVisitSaga)
  ]);
}

export function* watchLocation() {
  yield all([
    takeLatest(actionLabels.GET_LOCATION_SAGA, getLocationSaga),
    takeEvery(actionLabels.ADD_LOCATION_SAGA, addLocationSaga),
    takeEvery(actionLabels.EDIT_LOCATION_SAGA, editLocationSaga),
  ]);
}

export function* watchService() {
  yield all([
    takeLatest(actionLabels.GET_SERVICE_SAGA, getServiceSaga),
    takeEvery(actionLabels.ADD_SERVICE_SAGA, addServiceSaga),
    takeEvery(actionLabels.EDIT_SERVICE_SAGA, editServiceSaga),
    takeLatest(actionLabels.GET_PART_SAGA, getPartSaga),
    takeEvery(actionLabels.ADD_PART_SAGA, addPartSaga),
    takeEvery(actionLabels.EDIT_PART_SAGA, editPartSaga),
  ]);
}

export function* watchCustomer() {
  yield all([
    takeLatest(actionLabels.GET_CUSTOMER_SAGA, getCustomerSaga),
    takeEvery(actionLabels.ADD_CUSTOMER_SAGA, addCustomerSaga),
    takeEvery(actionLabels.EDIT_CUSTOMER_SAGA, editCustomerSaga),
    takeLatest(actionLabels.GET_TECHNICIAN_SAGA, getTechnicianSaga),
    takeEvery(actionLabels.ADD_TECHNICIAN_SAGA, addTechnicianSaga),
    takeEvery(actionLabels.EDIT_TECHNICIAN_SAGA, editTechnicianSaga),
    takeLatest(actionLabels.GET_MANAGER_SAGA, getManagerSaga),
    takeEvery(actionLabels.ADD_MANAGER_SAGA, addManagerSaga),
    takeEvery(actionLabels.EDIT_MANAGER_SAGA, editManagerSaga),
  ]);
}

export function* watchReport() {
  yield all([
    takeLatest(actionLabels.GET_REPORT_LS_REVENUE_SAGA, getReportLSRevenueSaga),
    takeLatest(actionLabels.GET_REPORT_REVENUE_SAGA, getReportRevenueSaga),
    takeLatest(actionLabels.GET_REPORT_TOP_REVENUE_SAGA, getReportTopRevenueSaga),
  ]);
}