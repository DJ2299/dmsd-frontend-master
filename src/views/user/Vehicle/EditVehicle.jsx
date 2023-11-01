import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { editVehicleSaga, deleteVehicleSaga } from '../../../store/actions';

const EditVehicle = props => {
    const { modalOpenClose,initialValues } = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const dispatch = useDispatch();
    const { vehicleList } = useSelector(state => state.vehicle);
    const { userData } = useSelector(state => state.auth);
    const validationSchema = Yup.object({
      vehicleType: Yup.string().required("Vehicle type required"),
      vehicleYear: Yup.string().required("Vehicle year required"),
      vehicleColor: Yup.string().required("Vehicle color required"),
      vehicleModel: Yup.string().required("Vehicle model required"),
      vehicleManufacturer: Yup.string().required("Vehicle manufacturer required"),
    });
  
    const closeModel = () => {
      modalOpenClose(false);
    };
  
    const submitBtnHandler = data => {
      dispatch(editVehicleSaga({ data, closeModel,setIsSubmitted }));
    };
    
   
    
    return (
        <>
        
          <Model
            headerTitle="Edit Vehicle"
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
                        <label htmlFor="inputfname">Vehicle Type</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputfname"
                          name="vehicleType"
                          value={values.vehicleType}
                          onChange={e => {
                            handleChange(e);
                            // dispatch(resetErrorMsg());
                          }}
                          onBlur={handleBlur}
                        />
                        <div className="error-message">
                          {errors.vehicleType && touched.vehicleType && errors.vehicleType}
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputlname">Vehicle Model</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputlname"
                          name="vehicleModel"
                          value={values.vehicleModel}
                          onChange={e => {
                            handleChange(e);
                            // dispatch(resetErrorMsg());
                          }}
                          onBlur={handleBlur}
                        />
                        <div className="error-message">
                          {errors.vehicleModel && touched.vehicleModel && errors.vehicleModel}
                        </div>
                      </div>
                    </div>
    
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="fusername">Vehicle Manufacturer</label>
                        <input
                          type="text"
                          className="form-control signup-username"
                          id="fusername"
                          name="vehicleManufacturer"
                          value={values.vehicleManufacturer}
                                                onChange={e => {
                            handleChange(e);
                            // dispatch(resetErrorMsg());
                          }}
                          onBlur={handleBlur}
                        />
                        <div className="error-message">
                          {errors.vehicleManufacturer && 
                                                touched.vehicleManufacturer && 
                                                errors.vehicleManufacturer}
                        </div>
                      </div>
                      <div className="form-group col-md-6 mb-pos setting-selectbox">
                        <label htmlFor="inputPhone">Vehicle Year</label>
                        <input
                          type="number"
                          placeholder=""
                          className="form-control"
                          id="inputPhone"
                          name="vehicleYear"
                          value={values.vehicleYear}
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                                                onChange={e => {
                            handleChange(e);
                            // dispatch(resetErrorMsg());
                          }}
                          onBlur={handleBlur}
                          onKeyDown={e => {
                            if (
                              e.which === 38 ||
                              e.which === 40 ||
                              e.which === 69 ||
                              e.which === 189 ||
                              e.which === 187
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <div className="error-message">
                          {errors.vehicleYear && touched.vehicleYear && errors.vehicleYear}
                        </div>
                      </div>
                    </div>
    
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">Vehicle Color</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword"
                          name="vehicleColor"
                          value={values.vehicleColor}
                          onChange={e => {
                            handleChange(e);
                            // dispatch(resetErrorMsg());
                          }}
                          onBlur={handleBlur}
                          autoComplete="off"
                        />
                        <div className="error-message">
                          {errors.vehicleColor && 
                          touched.vehicleColor && errors.vehicleColor}
                        </div>
                      </div>
                    </div>
    
                    <div className="error-message"></div>
    
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
    
