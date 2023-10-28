import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { AlertMessageModal } from '../../../components';

// eslint-disable-next-line no-unused-vars
const LoginContainer = props => {
  const dispatch = useDispatch();
  const { open } = useSelector(state => state.modal);


  return (
    <>
      
      <Login />
      {open && <AlertMessageModal />}
    </>
  );
};

export default LoginContainer;
