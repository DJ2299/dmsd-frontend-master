import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { editBookingSaga } from '../../../store/actions';

const EditVehicle = props => {
    const { modalOpenClose,initialValues } = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const dispatch = useDispatch();
    const status = String;
    const { bookingList } = useSelector(state => state.serviceRecords);
    const {vehicleList} = useSelector(state => state.vehicle);
    const { userData } = useSelector(state => state.auth);
    const { locationList } = useSelector(
        state => state.location,
      );
      const { serviceList } = useSelector(
        state => state.service,
      );
      const { errorMsg } = useSelector(state => state.booking);
    const validationSchema = Yup.object({
      vehicleType: Yup.string().required("Vehicle type required")
     // appointmentDate: Yup.string().required("Appointment Date required"),
      
    });
    
    console.log("vehiclelist " + vehicleList)
  
    const closeModel = () => {
      modalOpenClose(false);
    };
  
    const submitBtnHandler = data => {
      console.log("data :" + data.appointmentDate + data.vehicleId + data.appointmentId);
    //data.status = status;
      dispatch(editBookingSaga({ data, closeModel,setIsSubmitted }));
      window.location.reload();
    };
    
   
    
    return (
        <>
        
          <Model
            headerTitle="Edit Booking"
            modalId="signUpModal"
            modalClass="modal-lg"
            closeModel={closeModel}
          >
            <Formik
           
              initialValues={
                initialValues
              }
              
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const val = { ...values };
                val.appointmentDate = `${val.date}`;
                //status = values.status
                validationSchema.validate(val);
                setSubmitting(false);
                setIsSubmitted(true);
                submitBtnHandler(val);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                // isSubmitting,
              }) => (
                <form className="mt-4 mb-4" onSubmit={handleSubmit} noValidate>
              <div className="modal-body px-5 pt-0">
                <div className="m-h-show">
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputfname">Vehicle</label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="vehicleId"
                      value={values.vehicleId}
                      onChange={e => {
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    >
                      <option value={0}>Select</option>
                      {
                        vehicleList && vehicleList.map(item => (
                          <option value={item.vehicleId}>
                            {`${item.vehicleType} ${item.vehicleManufacturer} ${item.vehicleModel}`}
                          </option>
                        ))
                      }
                    </select>
                    <div className="error-message">
                      {errors.vehicleId && touched.vehicleId && errors.vehicleId}
                    </div>
                  </div> 
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="fusername">Appointment Date</label>
                    <input
                      type="date"
                      className="form-control signup-username"
                      id="fusername"
                      name="date"
                      value={values.date}
											onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.date && 
											touched.date && 
											errors.date}
                    </div>
                  </div>
                </div>

                <div className="error-message">{errorMsg}</div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                >
                  Edit Booking
                </button>
                  </div>
                </form>
              )}
            </Formik>
          </Model>
        </>
      );
    };
    
    export default EditVehicle;
    
