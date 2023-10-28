import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPartSaga,
  getServiceSaga,
} from '../../../store/actions';
import AddService from './AddService';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Service = props => {
  const [openAddService, setOpenAddService] = useState(false)
  const { serviceList } = useSelector(
    state => state.service,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceSaga())
    dispatch(getPartSaga())
  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Service List</h2>
            {/* <button type='button' onClick={() => setOpenAddService(true)}>
              Add Service
            </button> */}
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>Name</th>
                <th>Labor Price</th>
                <th>Additional Charge</th>
                <th>Parts</th>
              </tr>
            </thead>
            <tbody>
            {
                serviceList ? serviceList.length === 0 ? (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : serviceList.map(item => (
                  <tr>
                    <td>{item.serviceName}</td>
                    <td>{item.laborPrice}</td>
                    <td>{item.addCharge}</td>
                    {/* <td>{item.parts || "-"}</td> */}
                    <td>
                      {item.partsName ? 
                      item.partsName.split(", ").map(item1 => <>{item1}<br/></>) : "-"}
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
      {openAddService && <AddService modalOpenClose={setOpenAddService} />}
    </>
  );
};

export default Service;
