import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  editBookingSaga,
  getBookingSaga
} from '../../../store/actions';
import AddBooking from './AddBooking';
import AddPayment from './AddPayment';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Booking = props => {
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState([]);
  const [openAddBooking, setOpenAddBooking] = useState(false)
  const [openAddPayment, setOpenAddPayment] = useState(false)
  const [appointmentId, setAppointmentId] = useState(false)
  const { bookingList } = useSelector(
    state => state.booking,
  );
  const { userId, locId } = useParams();
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    if(userId) {
      dispatch(getBookingSaga({ id: userId }))
    } else if(locId) {
      dispatch(getBookingSaga({ loc: locId }))
    } else {
      dispatch(getBookingSaga())
    }
    // dispatch(getVehicleSaga({ id: userData.id }))
    // dispatch(getLocationSaga())
    // dispatch(getServiceSaga())

  }, [])


  useEffect(() => {
    const data = bookingList && date !== ''
    ? bookingList.filter(item => item.appointmentDate === date) 
    : bookingList;
    setFilter(data);
  }, [date, bookingList])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>{userId ? 'User' : locId ? 'Location' : ''} Booking List</h2>
            {/* <button type='button' onClick={() => setOpenAddBooking(true)}>
              Book Appointment
            </button> */}
            <div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Location</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Appointment Date</th>
                <th>Total Charge</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
                filter ? filter.length === 0 ? (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : filter.map(item => (
                  <tr>
                    <td>{item.vehicleType}</td>
                    <td>{item.locationName}</td>
                    <td>{item.customerName}</td>
                    <td>{item.serviceName}</td>
                    <td>{item.appointmentDate}</td>
                    <td>${item.total_charge}</td>
                    <td>{item.paymentMethod}</td>
                    <td>
                      <select style={{ width: '100%', border: 0, outline: 0 }} value={item.status} 
                        onChange={(e) => {
                          if(e.target.value === "DONE") {
                            setAppointmentId(item.appointmentId);
                            setOpenAddPayment(true);
                          } else {
                            dispatch(editBookingSaga({
                              data: { 
                                id: item.appointmentId,
                                status: e.target.value
                              },
                              isStatus: true,
                            }))
                          }
                        }}
                      >
                        <option>CREATED</option>
                        <option>DROPPED</option>
                        <option>IN_PROGRESS</option>
                        <option>READY</option>
                        <option>DONE</option>
                      </select>
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
      {openAddPayment && (
        <AddPayment modalOpenClose={setOpenAddPayment} appointmentId={appointmentId} />
      )}
    </>
  );
};

export default Booking;
