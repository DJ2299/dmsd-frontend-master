import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLocationSaga,
  getManagerSaga,
} from '../../../store/actions';
import AddManager from './AddManager';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Technician = props => {
  const [openAddManager, setOpenAddManager] = useState(false)
  const { managerList } = useSelector(
    state => state.user,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerSaga())
    dispatch(getLocationSaga())
  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Manager List</h2>
            <button type='button' onClick={() => setOpenAddManager(true)}>
              Add Manager
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
                <th>Commission Percentage</th>
              </tr>
            </thead>
            <tbody>
            {
                managerList ? managerList.length === 0 ? (
                  <tr><td colSpan={9} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : managerList.map(item => (
                  <tr>
                    <td>{item.ssn}</td>
                    <td>{item.person.firstName}</td>
                    <td>{item.person.email}</td>
                    <td>{item.person.telephone}</td>
                    <td>{item.person.address}</td>
                    <td>{item.locationName}</td>
                    <td>{item.expertise}</td>
                    <td>{item.salary}</td>
                    <td>{item.commisionPercentage}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={9} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddManager && <AddManager modalOpenClose={setOpenAddManager} />}
    </>
  );
};

export default Technician;
