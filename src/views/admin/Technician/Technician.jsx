import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocationSaga,
  getTechnicianSaga,
} from '../../../store/actions';
import AddTechnician from './AddTechnician';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Technician = props => {
  const [openAddTechnician, setOpenAddTechnician] = useState(false)
  const { technicianList } = useSelector(
    state => state.user,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechnicianSaga())
    dispatch(getLocationSaga())
  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Technician List</h2>
            <button type='button' onClick={() => setOpenAddTechnician(true)}>
              Add Technician
            </button>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>SSN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone #</th>
                <th>Address</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
            {
                technicianList ? technicianList.length === 0 ? (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : technicianList.map(item => (
                  <tr>
                    <td>{item.ssn}</td>
                    <td>{item.person.firstName}</td>
                    <td>{item.person.email}</td>
                    <td>{item.person.telephone}</td>
                    <td>{item.person.address}</td>
                    <td>{item.locationName}</td>
                    <td>{item.expertise}</td>
                    <td>{item.salary}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={8} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddTechnician && <AddTechnician modalOpenClose={setOpenAddTechnician} />}
    </>
  );
};

export default Technician;
