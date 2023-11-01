/* eslint-disable no-lonely-if */
import { put } from 'redux-saga/effects';
import axios from 'axios';
import axiosMain from '../../http/axios/axios_main';
import { logout } from '../../store/actions';

// const baseURL =
//   process.env.NODE_ENV === 'development'
//     ? process.env.REACT_APP_END_POINT_URL_DEV
//     : process.env.REACT_APP_END_POINT_URL_PROD;

const baseURL = "http://localhost:8080/api/";


export default function* errorHandler({
  endpoint,
  successHandler,
  failHandler,
  failHandlerType = '',
  payload = {},
  apiType = '',
  token = '',
  isLogoutCall = false,
}) {
  if (apiType.trim() === '') {
    throw new Error('apiType is require');
  }
  try {
    let response;
    if (token === '') {
      if (apiType === 'get') {
        response = yield axiosMain.get(endpoint);
      } else if (apiType === 'post') {
        response = yield axiosMain.post(endpoint, payload);
      } else if (apiType === 'put') {
        response = yield axiosMain.put(endpoint, payload);
      } else if (apiType === 'delete') {
        response = yield axiosMain.delete(endpoint);
      }
    } else {
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      // eslint-disable-next-line no-lonely-if
      if (apiType === 'get') {
        response = yield axios.get(`${baseURL}${endpoint}`, config);
      } else if (apiType === 'post') {
        response = yield axios.post(`${baseURL}${endpoint}`, payload, config);
      } else if (apiType === 'put') {
        response = yield axios.put(`${baseURL}${endpoint}`, payload, config);
      } else if (apiType === 'delete') {
        response = yield axios.delete(`${baseURL}${endpoint}`, config);
      }
    }
    if (response && response.status === 200 && response.data) {
      yield successHandler(response.data);
    } else if (response !== undefined && response.status !== undefined) {
      if (
        response.data.msg !== undefined &&
        response.data.msg !== '' &&
        typeof response.data.msg === 'string'
      ) {
        if (failHandlerType === 'CUSTOM') {
          console.log("🚀 ~ file: errorHandler.js:67 ~ response.data:", response.data)
          yield failHandler(response.data.msg);
        } else {
          yield put(failHandler(response.data.msg));
        }
      } else {
        if (failHandlerType === 'CUSTOM') {
          yield failHandler('Server error! Please try again.');
        } else {
          yield put(failHandler('Server error! Please try again.'));
        }
      }
    } else {
      if (failHandlerType === 'CUSTOM') {
        yield failHandler('Something went wrong! Please try again.');
      } else {
        yield put(failHandler('Something went wrong! Please try again.'));
      }
    }
  } catch (error) {
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 400) {
        if (failHandlerType === 'CUSTOM') {
          yield failHandler(error.response.data.msg);
        } else {
          yield put(failHandler(error.response.data.msg));
        }
      }
      if (error.response.status === 401) {
        if (isLogoutCall) {
          successHandler({});
        } else {
          yield put(logout({ logoutType: 'manual' }));
        }
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        if (failHandlerType === 'CUSTOM') {
          yield failHandler(error.response.data.msg);
        } else {
          yield put(failHandler(error.response.data.msg));
        }
      } else {
        if (failHandlerType === 'CUSTOM') {
          yield failHandler('Server error! Please try again.');
        } else {
          yield put(failHandler('Server error! Please try again.'));
        }
      }
    } else {
      if (failHandlerType === 'CUSTOM') {
        yield failHandler('Something went wrong! Please try again.');
      } else {
        yield put(failHandler('Something went wrong! Please try again.'));
      }
    }
  }
}
