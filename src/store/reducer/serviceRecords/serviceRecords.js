import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  bookingList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_VISIT_START:
      return { ...state, isLoading: true, isProfileLoading: true };

      case actionLabels.EDIT_VISIT_START:
        return { ...state, isLoading: true };
        
      case actionLabels.EDIT_VISIT_SUCCESS: {
        return {
          ...state,
        };
      }
      case actionLabels.EDIT_VISIT_FAIL: {
        console.log("EDIT_VISIT_FAIL");
        return { ...state, isLoading: false, errorMsg: payload };
      }


    case actionLabels.GET_VISIT_SUCCESS:
      console.log('Payload:', payload);
      return {
        ...state,
        isLoading: false,
        bookingList: payload, // Update the bookingList field with data from GET_VISIT_SUCCESS
      };

    case actionLabels.GET_VISIT_FAIL:
      return { ...state, isLoading: false, errorMsg: payload };

    // ... (other cases)

    default:
      return state;
  }
};
