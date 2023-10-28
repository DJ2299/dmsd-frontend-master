import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  vehicleList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_VEHICLE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_VEHICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        vehicleList: payload,
      };
    }
    case actionLabels.GET_VEHICLE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_VEHICLE_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_VEHICLE_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_VEHICLE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_VEHICLE_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_VEHICLE_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_VEHICLE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.DELETE_VEHICLE_FAIL:{
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.DELETE_VEHICLE_START:{
      return { ...state, isLoading: true};
    }
    case actionLabels.DELETE_VEHICLE_SUCCESS:{
      return { ...state,
    };
  }
    default:
      return state;
  }
};
