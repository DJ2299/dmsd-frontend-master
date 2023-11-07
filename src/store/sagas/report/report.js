/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';

import {
  getReportLSRevenueStart,
  getReportLSRevenueSuccess,
  getReportLSRevenueFail,
  getReportRevenueStart,
  getReportRevenueSuccess,
  getReportRevenueFail,
  getReportTopRevenueStart,
  getReportTopRevenueSuccess,
  getReportTopRevenueFail,
} from '../../actions';
import { errorHandler } from '../../../utils';

export function* getReportLSRevenueSaga(action) {
  const { date } = action.payload.data;
  yield put(getReportLSRevenueStart());
  yield errorHandler({
    endpoint: `/report/pending-services?date=${date}`,
    successHandler: yield function* (response) {
      yield put(getReportLSRevenueSuccess(response.data));
    },
    failHandler: getReportLSRevenueFail,
    apiType: 'get',
  });
}

export function* getReportRevenueSaga(action) {
  const { start, end } =  action.payload.data;
  yield put(getReportRevenueStart());
  yield errorHandler({
    endpoint: `/report/revenue/${start},${end}`,
    successHandler: yield function* (response) {
      yield put(getReportRevenueSuccess(response.data));
    },
    failHandler: getReportRevenueFail,
    apiType: 'get',
  });
}

export function* getReportTopRevenueSaga(action) {
  yield put(getReportTopRevenueStart());
  yield errorHandler({
    endpoint: `/report/report-top-3`,
    successHandler: yield function* (response) {
      yield put(getReportTopRevenueSuccess(response.data));
    },
    failHandler: getReportTopRevenueFail,
    apiType: 'get',
  });
}
