import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  locationList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_LOCATION_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_LOCATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        locationList: payload,
      };
    }
    case actionLabels.GET_LOCATION_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_LOCATION_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_LOCATION_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_LOCATION_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_LOCATION_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_LOCATION_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_LOCATION_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
