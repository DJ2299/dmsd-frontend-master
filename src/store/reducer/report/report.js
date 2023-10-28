import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  errorMsg: '',
  reportLSRevenueList: null,
  reportRevenueList: null,
  reportTopRevenueList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_REPORT_LS_REVENUE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_REPORT_LS_REVENUE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        reportLSRevenueList: payload,
      };
    }
    case actionLabels.GET_REPORT_LS_REVENUE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.GET_REPORT_REVENUE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_REPORT_REVENUE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        reportRevenueList: payload,
      };
    }
    case actionLabels.GET_REPORT_REVENUE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    case actionLabels.GET_REPORT_TOP_REVENUE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_REPORT_TOP_REVENUE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        reportTopRevenueList: payload,
      };
    }
    case actionLabels.GET_REPORT_TOP_REVENUE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
