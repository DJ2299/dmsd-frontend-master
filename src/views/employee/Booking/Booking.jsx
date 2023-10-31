import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editBookingSaga,
  getBookingSaga
  
} from '../../../store/actions';
import AddBooking from './AddBooking';
import './index.css';
// import { getBooking1Saga } from '../../../store/sagas/booking/booking';

// eslint-disable-next-line no-unused-vars
const Booking = props => {
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState([]);
  const [openAddBooking, setOpenAddBooking] = useState(false)
  const { bookingList } = useSelector(
    state => state.booking,
  );
  const { userData } = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();
  const values = [10, 20, 30, 40, 50];
  const randomIndex = Math.floor(Math.random() * values.length);
  const charge = values[randomIndex]
  useEffect(() => {
    dispatch(getBookingSaga({ loc: userData.location_id }))
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
            <h2>Booking List</h2>
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
                {/* <th>Location</th> */}
                <th>Customer</th>
                <th>Service</th>
                <th>Appointment Date</th>
                <th>Total Charge</th>
                {/* <th>Payment Method</th> */}
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
                filter ? filter.length === 0 ? (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : filter.map(item => (
                  <tr>
                    <td>{item.vehicleType}</td>
                    {/* <td>{item.locationName}</td> */}
                    <td>{item.customerName}</td>
                    {/* <td>{item.serviceName ? item.serviceName.split(",").map(item1=> <>{item1}<br/></>) : "-"}</td> */}
                    <td>{item.serviceName}</td>
                    <td>{item.appointmentDate}</td>
                    <td>${item.total_charge}</td>
                    {/* <td>{item.paymentMethod}</td> */}
                    <td>
                      <select style={{ width: '100%', border: 0, outline: 0 }} value={item.status} 
                        onChange={(e) => 
                          dispatch(editBookingSaga({
                            data: { 
                              id: item.appointmentId,
                              status: e.target.value
                            },
                            isStatus: true,
                          }))
                        }
                      >
                        <option>CREATED</option>
                        <option>DROPPED</option>
                        <option>IN_PROGRESS</option>
                        <option>READY</option>
                        <option>DONE</option>
                      </select>
                    </td>
                   
                    <td>
                        <button
                          type="button"
                          // onClick={() => {setEditBooking(true);
                          //   setSelectedBooking(item);
                          // }}
                          style={{
                            backgroundColor: 'green',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            margin:'10px',
                            marginLeft:'10px',
                            marginRight:'50px'
                          }}
                          >
                          Edit
                        </button>
                        <span></span>
                        <button
                          type="button"
                          // onClick={() => handleDelete(item.bookingId)}
                          style={{
                            backgroundColor: 'red',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            margin:'10px'
                          }}
                        >
                         Delete
                        </button>
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
    </>
  );
};

export default Booking;
