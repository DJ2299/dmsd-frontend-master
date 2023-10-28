import { combineReducers } from 'redux';
import auth from './auth/auth';
import modal from './modal/modal';
import profile from './profile/profile';
import vehicle from './vehicle/vehicle';
import booking from './booking/booking';
import location from './location/location';
import service from './service/service';
import user from './user/user';
import report from './report/report';

const allReducers = combineReducers({
  auth,
  modal,
  profile,
  vehicle,
  booking,
  location,
  service,
  user,
  report,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
