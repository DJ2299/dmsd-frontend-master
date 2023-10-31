import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { editBookingSaga, deleteBookingSaga } from '../../../store/actions';

const EditVehicle = props => {
    const { modalOpenClose,initialValues } = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const dispatch = useDispatch();
    const { bookingList } = useSelector(state => state.booking);
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
      vehicleType: Yup.string().required("Vehicle type required"),
      serviceName: Yup.string().required("Service Name required"),
      locationName: Yup.string().required("Location required"),
      appointmentDate: Yup.string().required("Appointment Date required"),
      
    });
  
    const closeModel = () => {
      modalOpenClose(false);
    };
  
    const submitBtnHandler = data => {
      dispatch(editBookingSaga({ data, closeModel,setIsSubmitted }));
    };
    
   
    
    return (
        <>
        
          <Model
            headerTitle="Edit Booking"
            modalId="signUpModal"
            modalClass="modal-lg"
            closeModel={closeModel}
          >
            {/* <div className="row sticky">
              <div className="col pl-5 pr-0 m-h-show">
                <button type="button" className="logo" onClick={() => modalOpenClose(false)}>
                  <img src={MOB_PUBCHAT_PNG} alt="Pubchat Logo" data-dismiss="modal" />
                </button>
              </div>
            </div> */}
            <Formik
           
              initialValues={initialValues}
              
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const val = { ...values };
                // eslint-disable-next-line prefer-destructuring
                // val.countryCode = val.countryCode.split(' ')[1];
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
                  {/* <h4 className="m-for-every">
                    <span className="font-bold">
                      <img src={PUBCHAT_PNG} width="195" height="45" alt="" />
                    </span>
                    For Everyone
                  </h4> */}
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
                        // dispatch(resetErrorMsg());
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
                    {/* <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      name="vehicleId"
                      value={values.vehicleId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    /> */}
                    <div className="error-message">
                      {errors.vehicleId && touched.vehicleId && errors.vehicleId}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputlname">Location</label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="locationId"
                      value={values.locationId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    >
                      <option value={0}>Select</option>
                      {
                        locationList && locationList.map(item => (
                          
                          <option value={item.locationId}>
                            {item.locationName}
                          </option>
                        ))
                      }
                    </select>
                    {/* <input
                      type="text"
                      className="form-control"
                      id="inputlname"
                      name="locationId"
                      value={values.locationId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    /> */}
                    <div className="error-message">
                      {errors.locationId && touched.locationId && errors.locationId}
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
                  {/* <div className="form-group col-md-6">
                    <label htmlFor="fusername">Appointment Time</label>
                    <input
                      type="time"
                      className="form-control signup-username"
                      id="fusername"
                      name="time"
                      value={values.time}
											onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.time && 
											touched.time && 
											errors.time}
                    </div>
                  </div> */}
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword">Service</label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="serviceId"
                      multiple
                      value={values.serviceId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    >
                      <option value={0}>Select</option>
                      {
                        serviceList && serviceList.map(item => (
                          <option key={item.serviceId} value={item.serviceId}>
                            {item.serviceName}
                          </option>
                        ))
                      }
                    </select>
                    {/* <select 
                      className="form-control"
                      id="inputPassword"
                      name="serviceId"
                      value={values.serviceId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    >
                      <option>Select</option>
                    </select> */}
                    {/* <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      name="serviceId"
                      value={values.serviceId}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                      autoComplete="off"
                    /> */}
                    <div className="error-message">
                      {errors.serviceId && touched.serviceId && errors.serviceId}
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
                    {/* <p className="mt-4 text-center signIn-text pb-3">
                      I already have an account.
                      <button
                        className="text-btn ml-1"
                        type="button"
                        style={{ textDecoration: 'underline' }}
                        onClick={() => {
                          closeModel();
                        }}
                      >
                        Login
                      </button>
                    </p> */}
                  </div>
                </form>
              )}
            </Formik>
          </Model>
        </>
      );
    };
    
    export default EditVehicle;
    
