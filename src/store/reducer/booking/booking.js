import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  bookingList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_BOOKING_START:
      return { ...state, isLoading: true, isProfileLoading: true };

    // case actionLabels.GET_VISIT_START:
    //   return { ...state, isLoading: true, isProfileLoading: true };


    case actionLabels.GET_BOOKING_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        bookingList: payload,
      };
    }

    // case actionLabels.GET_VISIT_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     bookingList: payload,
    //   };
    // }

    case actionLabels.GET_BOOKING_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }

    // case actionLabels.GET_VISIT_FAIL: {
    //   return { ...state, isLoading: false, errorMsg: payload };
    // }

    case actionLabels.ADD_BOOKING_START:
      return { ...state, isLoading: true };
    case actionLabels.ADD_BOOKING_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_BOOKING_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.EDIT_BOOKING_START:
      return { ...state, isLoading: true };
    case actionLabels.EDIT_BOOKING_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.EDIT_BOOKING_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.COLLECT_PAYMENT_START:
      return { ...state, isLoading: true };
    case actionLabels.COLLECT_PAYMENT_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.COLLECT_PAYMENT_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.DELETE_BOOKING_FAIL:{
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.DELETE_BOOKING_START:{
      return { ...state, isLoading: true};
    }
    case actionLabels.DELETE_BOOKING_SUCCESS:{
      return { ...state,
    };
  }
    default:
      return state;
  }
   
  };
  
