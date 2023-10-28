import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { addServiceSaga } from '../../../store/actions';

const AddService = props => {
  const { modalOpenClose } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.booking);
  const { partList } = useSelector(state => state.service);
  const validationSchema = Yup.object({
    skillId : Yup.number().min(1, "Skill required").required("Skill required"),
    serviceName : Yup.string().required("Service name required"),
    laborPrice : Yup.number().min(1, "Labor price required").required("Labor price required"),
    addCharge : Yup.number().min(1, "Additional charge required")
      .required("Additional charge required"),
    partIds: Yup.array().required("Parts required")
  });

  const closeModel = () => {
    modalOpenClose(false);
  };

  // eslint-disable-next-line no-unused-vars
  const submitBtnHandler = data => {
    dispatch(addServiceSaga({ data, closeModel, setIsSubmitted }));
  };
  return (
    <>
      <Model
        headerTitle="Add Service"
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
          initialValues={{
            skillId : "1",
            serviceName : "Car Wash",
            laborPrice : "300",
            addCharge : "50",
            partIds: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const val = { ...values };
            // eslint-disable-next-line prefer-destructuring
            val.appointmentDate = `${val.date}`;
            // val.appointmentDate = `${val.date} ${val.time}`;
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
                    <label htmlFor="inputfname">Service Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      name="serviceName"
                      value={values.serviceName}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.serviceName && touched.serviceName && errors.serviceName}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputlname">Labor Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlname"
                      name="laborPrice"
                      value={values.laborPrice}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.laborPrice && touched.laborPrice && errors.laborPrice}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="fusername">Additional Charge</label>
                    <input
                      type="text"
                      className="form-control signup-username"
                      id="fusername"
                      name="addCharge"
                      value={values.addCharge}
											onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.addCharge && 
											touched.addCharge && 
											errors.addCharge}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword">Parts</label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="partIds"
                      multiple
                      value={values.partIds}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    >
                      {/* <option value={0}>Select</option> */}
                      {
                        partList && partList.map(item => (
                          <option value={item.partId}>
                            {item.pname}
                          </option>
                        ))
                      }
                    </select>
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
                      {errors.partIds && touched.partIds && errors.partIds}
                    </div>
                  </div>

                </div>

                <div className="error-message">{errorMsg}</div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                >
                  Add Service
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

export default AddService;
