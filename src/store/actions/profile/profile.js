import * as actionLabels from '../../actionLabels';

export const getProfileStart = () => ({
  type: actionLabels.GET_PROFILE_START,
});

export const getProfileSaga = payload => ({
  type: actionLabels.GET_PROFILE_SAGA,
  payload,
});

export const getProfileSuccess = payload => ({
  type: actionLabels.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFail = payload => ({
  type: actionLabels.GET_PROFILE_FAIL,
  payload,
});

export const editProfileStart = () => ({
  type: actionLabels.EDIT_PROFILE_START,
});

export const editProfileSaga = payload => ({
  type: actionLabels.EDIT_PROFILE_SAGA,
  payload,
});

export const editProfileSuccess = payload => ({
  type: actionLabels.EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFail = payload => ({
  type: actionLabels.EDIT_PROFILE_FAIL,
  payload,
});

export const resetProfileErrorMsg = payload => ({
  type: actionLabels.RESET_PROFILE_ERROR_MSG,
  payload,
});

export const getCurrentUserId = payload => ({
  type: actionLabels.GET_CURRENT_USER_ID,
  payload,
});

export const resetCurrentUserId = () => ({
  type: actionLabels.RESET_CURRENT_USER_ID,
});
