// import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
  logout,
} from '../../store/actions';
import axiosMain from '../../http/axios/axios_main';
import SetTokenHeader from '../../hoc/SetTokenHeader/SetTokenHeader';
import { LOGO_PNG } from '../../assets/images';
import './index.css';

const Layout = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const { userData } = useSelector(
    state => state.auth,
  );
  // const history = useHistory();
  // const { pathname } = history.location;
  const handleLogout = () => dispatch(logout());
  
  return (
    <>
      <header>
        <div style={{ 
          color: '#fff', display: 'flex', alignItems: 'center', gap: 30, fontSize: 20 
        }}>
          <img src={LOGO_PNG} alt='' width={50} />
          <b>Woody’s Automotive - {userData.personType === 'CUSTOMER' ? 
          'Customer' : userData.personType === 'ADMIN' ? 'Admin' : 'Manager'}</b>
        </div>
        <div className='nav-list'>
          <div><Link to="/">Home</Link></div>
          {userData.personType === 'CUSTOMER' ? (
            <>
              <div><Link to="/vehicle">Vehicle</Link></div>
              <div><Link to="/booking">Booking</Link></div>
              <div><Link to="/serviceRecords">Service Records</Link></div>
              <div><Link to="/profile">Profile</Link></div>
            </>
          ) : userData.personType === 'ADMIN' ? (
            <>
              <div><Link to="/customer">Customer</Link></div>
              <div><Link to="/technician">Technician</Link></div>
              <div><Link to="/manager">Manager</Link></div>
              {/* <div><Link to="/location">Location</Link></div> */}
              <div><Link to="/service">Service</Link></div>
              <div><Link to="/parts">Parts</Link></div>
              <div><Link to="/booking">Booking</Link></div>
              <div><Link to="/report">Report</Link></div>
            </>
          ) : (
            <>
              <div><Link to="/service">Service</Link></div>
              <div><Link to="/booking">Booking</Link></div>
            </>
          )}
          <div>
            <button className='link-button' type='button' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {children}
    </>
  );
};

export default SetTokenHeader(Layout, axiosMain);
