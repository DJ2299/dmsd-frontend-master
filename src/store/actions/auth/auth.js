import * as actionLabels from '../../actionLabels';

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const login = payload => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = payload => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});

export const signupStart = () => ({
  type: actionLabels.SIGNUP_START,
});

export const signupSaga = payload => ({
  type: actionLabels.SIGNUP_SAGA,
  payload,
});

export const signupSuccess = payload => ({
  type: actionLabels.SIGNUP_SUCCESS,
  payload,
});

export const signupFail = payload => ({
  type: actionLabels.SIGNUP_FAIL,
  payload,
});

export const logoutStart = payload => ({
  type: actionLabels.LOGOUT_START,
  payload,
});
export const logout = payload => ({
  type: actionLabels.LOGOUT_SAGA,
  payload,
});

export const logoutSuccess = payload => ({
  type: actionLabels.LOGOUT_SUCCESS,
  payload,
});

export const logoutFailed = payload => ({
  type: actionLabels.LOGOUT_FAILED,
  payload,
});

export const authenticationValidator = () => ({
  type: actionLabels.AUTHENTICATION_VALIDATOR,
});

export const resetErrorMsg = () => ({
  type: actionLabels.RESET_ERROR_MSG,
});

export const getUserDetailSaga = payload => ({
  type: actionLabels.GET_USER_DETAIL_SAGA,
  payload,
});

export const getUserDetailStart = () => ({
  type: actionLabels.GET_USER_DETAIL_START,
});

export const getUserDetailSuccess = payload => ({
  type: actionLabels.GET_USER_DETAIL_SUCCESS,
  payload,
});

export const getCurrentUserDetailSuccess = payload => ({
  type: actionLabels.GET_CURRENT_USER_DETAIL_SUCCESS,
  payload,
});

export const getUserDetailFail = payload => ({
  type: actionLabels.GET_USER_DETAIL_FAIL,
  payload,
});

export const getCurrentUserDetailFail = payload => ({
  type: actionLabels.GET_CURRENT_USER_DETAIL_FAIL,
  payload,
});

export const editUserDetailSaga = payload => ({
  type: actionLabels.EDIT_USER_DETAIL_SAGA,
  payload,
});

export const editUserDetailStart = () => ({
  type: actionLabels.EDIT_USER_DETAIL_START,
});

export const editUserDetailSuccess = payload => ({
  type: actionLabels.EDIT_USER_DETAIL_SUCCESS,
  payload,
});

export const editUserDetailFail = payload => ({
  type: actionLabels.EDIT_USER_DETAIL_FAIL,
  payload,
});