import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getVehicleSaga ,deleteVehicleSaga } from '../../../store/actions';
import AddVehicle from './AddVehicle';
import EditVehicle from './EditVehicle';
import './index.css';
import { data } from 'jquery';
//import { deleteVehicleSaga } from '../../../store/sagas/vehicle/vehicle';

// eslint-disable-next-line no-unused-vars
const Vehicle = props => {
  const [openAddVehicle, setOpenAddVehicle] = useState(false)
  const [openEditVehicle, setEditVehicle] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const { vehicleList } = useSelector(
    state => state.vehicle,
  );
  const { userData } = useSelector(
    state => state.auth,
  );
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicleSaga({ id: userData.id }))
  }, [])

  const handleDelete = (vehicleId) => {
    // Dispatch the delete action
    dispatch(deleteVehicleSaga(vehicleId,setIsSubmitted));
  };


  
  return (
    <>
      <div className="vehicle">
        <div className='vehicle-list'>
          <div className='vehicle-list-header'>
            <h2>Vehicle List</h2>
            <button type='button' onClick={() => setOpenAddVehicle(true)}>Add Vehicle</button>
          </div>
          <table width='100%' border={1}>
            <thead>
              <tr>
                <th>Vehicle Model</th>
                <th>Vehicle Type</th>
                <th>Manufacture</th>
                <th>Color</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                vehicleList ? vehicleList.length === 0 ? (
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : vehicleList.map(item => (
                  <tr key={item.vehicleId}>
                    <td>{item.vehicleModel}</td>
                    <td>{item.vehicleType}</td>
                    <td>{item.vehicleManufacturer}</td>
                    <td>{item.vehicleColor}</td>
                    <td>{item.vehicleYear}</td>
                    <td>
                        <button
                          type="button"
                          onClick={() => {setEditVehicle(true);
                            setSelectedVehicle(item);
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
                          onClick={() => handleDelete(item.vehicleId)}
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
                  <tr><td colSpan={5} className="text-center pt-5 pb-5">Loading...</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {openAddVehicle && <AddVehicle modalOpenClose={setOpenAddVehicle} />}
      {openEditVehicle && <EditVehicle modalOpenClose={setEditVehicle}
    initialValues={{
      customerId:userData.id,
      vehicleId : selectedVehicle.vehicleId,
      vehicleType: selectedVehicle.vehicleType,
      vehicleYear: selectedVehicle.vehicleYear,
      vehicleColor: selectedVehicle.vehicleColor,
      vehicleModel: selectedVehicle.vehicleModel,
      vehicleManufacturer: selectedVehicle.vehicleManufacturer,}} />}
     
    </>
  );
};

export default Vehicle;
