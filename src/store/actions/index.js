export * from './auth/auth';
export * from './modal/modal';
export * from './profile/profile';
export * from './vehicle/vehicle';
export * from './booking/booking';
export * from './serviceRecords/serviceRecords';
export * from './location/location';
export * from './service/service';
export * from './user/user';
export * from './report/report';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
