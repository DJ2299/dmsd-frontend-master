import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookingSaga, getLocationSaga, getServiceSaga, getVehicleSaga, deleteBookingSaga
} from '../../../store/actions';
import AddBooking from './AddBooking';
import EditBooking from './EditBooking';
import ViewInvoice from './ViewInvoice';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Booking = props => {
  const [openAddBooking, setOpenAddBooking] = useState(false)
  const [openEditBooking, setEditBooking] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openViewInvoice, setOpenViewInvoice] = useState(null)
  
  const [selectedBooking, setSelectedBooking] = useState(null);
  const { bookingList } = useSelector(
    state => state.booking,
  );
  const { userData } = useSelector(
    state => state.auth,
  );
  const handleDelete = (bookingId) => {
    // Dispatch the delete action
    dispatch(deleteBookingSaga(bookingId,setIsSubmitted));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingSaga({ id: userData.id }))
    dispatch(getVehicleSaga({ id: userData.id }))
    dispatch(getLocationSaga())
    dispatch(getServiceSaga())

  }, [])
  // const userAppointments = bookingList.filter(item => item.customerId === userId);
  // const serviceNames = userAppointments.map(item => item.services.map(service => service.serviceName).join(', '));
  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Appointment List</h2>
            <button type='button' onClick={() => setOpenAddBooking(true)}>Book Appointment</button>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr>
                <th>Vehicle</th>
                {/* <th>Location</th> */}
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
                bookingList ? bookingList.length === 0 ? (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : bookingList.map(item => (
                  <tr>
                    <td>{item.vehicleType}</td>
                    {/* <td>{item.locationName}</td> */}
                    <td>{item.serviceName ? item.serviceName.split(",").map(item1=> <>{item1}<br/></>) : "-"}</td>
                    {/* <td>{item.services[0].serviceName}</td> */}
                    {/* <td>
  {item.services && item.services.length > 0 ? (
    item.services.map((service) => service.serviceName).join(', ')
  ) : 'No services available'}
</td> */}
                    {/* <td>{serviceNames.join(', ')}</td> */}
                    {/* <td>
  {Array.isArray(item.serviceName) && item.serviceName.length > 0
    ? item.serviceName.map((item1, index) => (
        <React.Fragment key={index}>
          {item1}
          {index < item.serviceName.length - 1 && <br />}
        </React.Fragment>
      ))
    : "No Service Names Available"}
</td> */}
                    <td>{item.appointmentDate}</td>
                    <td>$100</td>
                    {/* <td>{item.paymentMethod}Cash</td> */}
                    <td>{item.status}</td>
                    <td>
                        <button
                          type="button"
                          onClick={() => {setEditBooking(true);
                            setSelectedBooking(item);
                          }}
                          style={{
                            backgroundColor: 'green',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            margin:'10px',
                            marginLeft:'150px',
                            marginRight:'50px'
                          }}
                          >
                          Edit
                        </button>
                        <span></span>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.bookingId)}
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
      {openViewInvoice && (
        <ViewInvoice data={openViewInvoice} modalOpenClose={setOpenViewInvoice} />
      )}
      {openEditBooking && <EditBooking modalOpenClose={setEditBooking}
      initialValues = {{
        customerId:userData.id,
        serviceId:selectedBooking.serviceId,
        appointmentId:selectedBooking.appointmentId,
        vehicleId:selectedBooking.vehicleId,
        date:selectedBooking.appointmentDate,
        serviceName:selectedBooking.serviceName,
        locationName:selectedBooking.locationName,
        vehicleType:selectedBooking.vehicleType,
        locationId:selectedBooking.locationId,
      }}
      />}
    </>
  );
};

export default Booking;
