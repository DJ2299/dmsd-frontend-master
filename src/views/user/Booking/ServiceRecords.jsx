import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookingSaga, getLocationSaga, getServiceSaga, getVehicleSaga
} from '../../../store/actions';
import AddBooking from './AddBooking';
import ViewInvoice from './ViewInvoice';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Booking = props => {
  const [openAddBooking, setOpenAddBooking] = useState(false)
  const [openViewInvoice, setOpenViewInvoice] = useState(null)
  const { bookingList } = useSelector(
    state => state.booking,
  );
  const { userData } = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingSaga({ id: userData.id }))
    dispatch(getVehicleSaga({ id: userData.id }))
    dispatch(getLocationSaga())
    dispatch(getServiceSaga())

  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Service Records</h2>
             
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr>
                <th>Vehicle</th>
               
                <th>Service</th>
                <th>Appointment Date</th>
                <th>Total Charge</th>
                <th>Payment Method</th>
                
                <th className='text-center'>Invoice</th>
              </tr>
            </thead>
            <tbody>
            {
                bookingList ? bookingList.length === 0 ? (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : bookingList.map(item => (
                  <tr>
                    <td>{item.vehicleType}</td>
                  
                    <td>{item.serviceName}</td>
                    <td>{item.appointmentDate}</td>
                    <td>$50</td>
                    <td>{item.paymentMethod}</td>
                  
                    <td className='text-center'>
                      {item.status === 'DONE' && <button
                        style={{ color: '#2c74ca', fontWeight: 'bolder' }}
                        type='button'
                        className='text-button p-0'
                        onClick={() => setOpenViewInvoice(item)}
                      >
                        View
                      </button>}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddBooking && <AddBooking modalOpenClose={setOpenAddBooking} />}
      {openViewInvoice && (
        <ViewInvoice data={openViewInvoice} modalOpenClose={setOpenViewInvoice} />
      )}
    </>
  );
};

export default Booking;
