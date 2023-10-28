import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  serviceList: null,
  partList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_SERVICE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_SERVICE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        serviceList: payload,
      };
    }
    case actionLabels.GET_SERVICE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_SERVICE_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_SERVICE_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_SERVICE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_SERVICE_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_SERVICE_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_SERVICE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.GET_PART_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_PART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        partList: payload,
      };
    }
    case actionLabels.GET_PART_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_PART_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_PART_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_PART_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_PART_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_PART_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_PART_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
