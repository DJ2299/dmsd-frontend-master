import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCustomerSaga,
} from '../../../store/actions';
import AddBooking from './AddBooking';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Customer = props => {
  const [openAddBooking, setOpenAddBooking] = useState(false)
  const { customerList } = useSelector(
    state => state.user,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerSaga())

  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Customer List</h2>
            {/* <button type='button' onClick={() => setOpenAddBooking(true)}>
              Book Appointment
            </button> */}
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone #</th>
                <th>Address</th>
                <th>Appointment</th>
              </tr>
            </thead>
            <tbody>
            {
                customerList ? customerList.length === 0 ? (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : customerList.map(item => (
                  <tr>
                    <td>{item.person.firstName}</td>
                    <td>{item.person.email}</td>
                    <td>{item.person.telephone}</td>
                    <td>{item.person.address}</td>
                    <td className='text-center'>
                      <Link to={`/booking/user/${item.person.id}`}>View</Link>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddBooking && <AddBooking modalOpenClose={setOpenAddBooking} />}
    </>
  );
};

export default Customer;
