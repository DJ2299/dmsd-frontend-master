import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  visitList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_VISIT_START:
      return { ...state, isLoading: true, isProfileLoading: true };

    case actionLabels.GET_VISIT_SUCCESS:
      console.log('Payload:', payload);
      return {
        ...state,
        isLoading: false,
        visitList: payload, // Update the bookingList field with data from GET_VISIT_SUCCESS
      };

    case actionLabels.GET_VISIT_FAIL:
      return { ...state, isLoading: false, errorMsg: payload };

    // ... (other cases)

    default:
      return state;
  }
};
