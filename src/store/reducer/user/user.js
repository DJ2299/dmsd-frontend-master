import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  customerList: null,
  technicianList: null,
  managerList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_CUSTOMER_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        customerList: payload,
      };
    }
    case actionLabels.GET_CUSTOMER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_CUSTOMER_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_CUSTOMER_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_CUSTOMER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_CUSTOMER_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_CUSTOMER_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_CUSTOMER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.GET_TECHNICIAN_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_TECHNICIAN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        technicianList: payload,
      };
    }
    case actionLabels.GET_TECHNICIAN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_TECHNICIAN_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_TECHNICIAN_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_TECHNICIAN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_TECHNICIAN_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_TECHNICIAN_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_TECHNICIAN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.GET_MANAGER_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_MANAGER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        managerList: payload,
      };
    }
    case actionLabels.GET_MANAGER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.ADD_MANAGER_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_MANAGER_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_MANAGER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_MANAGER_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_MANAGER_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_MANAGER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
