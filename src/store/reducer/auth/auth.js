import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLogin: false,
  isLoginLoading: false,
  isLoading: false,
  authToken: '',
  userData: {},
  errorMsg: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
      return { ...state, isLoading: true };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        authToken: payload.token,
        userData: payload,
        errorMsg: '',
      };
    }
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.SIGNUP_START:
      return { ...state, isLoading: true };
    case actionLabels.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        authToken: payload.token,
        errorMsg: '',
      };
    }
    case actionLabels.SIGNUP_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.LOGOUT_START: {
      return {
        ...state,
        isLoginLoading: true,
      };
    }
    case actionLabels.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoginLoading: false,
        isLogin: false,
        authToken: '',
        errorMsg: '',
        userData: {},
      };
    }
    case actionLabels.LOGOUT_FAILED: {
      return { ...state, isLoginLoading: false, errorMsg: payload };
    }
    case actionLabels.RESET_ERROR_MSG: {
      return {
        ...state,
        errorMsg: '',
      };
    }
    case actionLabels.GET_USER_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case actionLabels.GET_CURRENT_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        userData: payload,
        errorMsg: '',
      };
    }
    case actionLabels.GET_CURRENT_USER_DETAIL_FAIL: {
      return {
        ...state,
        userData: {
          _id: localStorage.getItem('userid'),
        },
        errorMsg: payload,
        isLoading: false,
      };
    }
    case actionLabels.EDIT_USER_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    }
    case actionLabels.EDIT_USER_DETAIL_SUCCESS: {
      const { userData } = state;
      const { firstName, lastName, profilePic, gender, dob } = payload;
      return {
        ...state,
        userData: { ...userData, firstName, lastName, profilePic, gender, dob },
        errorMsg: '',
      };
    }
    case actionLabels.EDIT_USER_DETAIL_FAIL: {
      return {
        ...state,
        errorMsg: payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
