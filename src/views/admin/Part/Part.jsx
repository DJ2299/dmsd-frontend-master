import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPartSaga,
} from '../../../store/actions';
import AddPart from './AddPart';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Service = props => {
  const [openAddPart, setOpenAddPart] = useState(false)
  const { partList } = useSelector(
    state => state.service,
  );
  // const { userData } = useSelector(
  //   state => state.auth,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartSaga())
  }, [])

  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Part List</h2>
            <button type='button' onClick={() => setOpenAddPart(true)}>
              Add Part
            </button>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>Name</th>
                {/* <th>Quantity</th>
                <th>Status</th> */}
                <th>Retail Price</th>
              </tr>
            </thead>
            <tbody>
            {
                partList ? partList.length === 0 ? (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : partList.map(item => (
                  <tr>
                    <td>{item.pname}</td>
                    {/* <td>{item.quantity}</td>
                    <td>{item.status}</td> */}
                    <td>{item.retailPrice}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddPart && <AddPart modalOpenClose={setOpenAddPart} />}
    </>
  );
};

export default Service;
