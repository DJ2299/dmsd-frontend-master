import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getLocationSaga,
} from '../../../store/actions';
import AddLocation from './AddLocation';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Location = props => {
  const [openAddLocation, setOpenAddLocation] = useState(false)
  const { locationList } = useSelector(
    state => state.location,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationSaga())

  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Location List</h2>
            <button type='button' onClick={() => setOpenAddLocation(true)}>
              Add Location
            </button>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>Name</th>
                <th>Address</th>
                <th>Manager</th>
                {/* <th>Address</th> */}
                <th>Appointment</th>
              </tr>
            </thead>
            <tbody>
            {
                locationList ? locationList.length === 0 ? (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : locationList.map(item => (
                  <tr>
                    <td>{item.locationName}</td>
                    <td>{item.address}</td>
                    <td>{item.managerName || "-"}</td>
                    <td className='text-center'>
                      <Link to={`/booking/loc/${item.locationId}`}>View</Link>
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
      {openAddLocation && <AddLocation modalOpenClose={setOpenAddLocation} />}
    </>
  );
};

export default Location;
