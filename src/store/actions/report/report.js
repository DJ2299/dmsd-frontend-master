import * as actionLabels from '../../actionLabels';

export const getReportLSRevenueStart = () => ({
  type: actionLabels.GET_REPORT_LS_REVENUE_START,
});

export const getReportLSRevenueSaga = payload => ({
  type: actionLabels.GET_REPORT_LS_REVENUE_SAGA,
  payload,
});

export const getReportLSRevenueSuccess = payload => ({
  type: actionLabels.GET_REPORT_LS_REVENUE_SUCCESS,
  payload,
});

export const getReportLSRevenueFail = payload => ({
  type: actionLabels.GET_REPORT_LS_REVENUE_FAIL,
  payload,
});

export const getReportRevenueStart = () => ({
  type: actionLabels.GET_REPORT_REVENUE_START,
});

export const getReportRevenueSaga = payload => ({
  type: actionLabels.GET_REPORT_REVENUE_SAGA,
  payload,
});

export const getReportRevenueSuccess = payload => ({
  type: actionLabels.GET_REPORT_REVENUE_SUCCESS,
  payload,
});

export const getReportRevenueFail = payload => ({
  type: actionLabels.GET_REPORT_REVENUE_FAIL,
  payload,
});

export const getReportTopRevenueStart = () => ({
  type: actionLabels.GET_REPORT_TOP_REVENUE_START,
});

export const getReportTopRevenueSaga = payload => ({
  type: actionLabels.GET_REPORT_TOP_REVENUE_SAGA,
  payload,
});

export const getReportTopRevenueSuccess = payload => ({
  type: actionLabels.GET_REPORT_TOP_REVENUE_SUCCESS,
  payload,
});

export const getReportTopRevenueFail = payload => ({
  type: actionLabels.GET_REPORT_TOP_REVENUE_FAIL,
  payload,
});
