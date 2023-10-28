import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { addManagerSaga } from '../../../store/actions';
import { 
  ADDRESS_REQUIRED, EMAIL_REQUIRED, EMAIL_VALID, 
  FIRSTNAME_REQUIRED, PASSWORD_REQUIRED, PHONE_REQUIRED 
} from '../../../constants/errorConstants';

const AddManager = props => {
  const { modalOpenClose } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.booking);
  const { locationList } = useSelector(state => state.location);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(FIRSTNAME_REQUIRED),
    pass: Yup.string().required(PASSWORD_REQUIRED),
    address: Yup.string().required(ADDRESS_REQUIRED),
    email: Yup.string().email().typeError(EMAIL_VALID).required(EMAIL_REQUIRED),
    telephone: Yup.string().required(PHONE_REQUIRED),
    ssn: Yup.string().required("SSN required"),
    salary: Yup.string().required("Salary required"),
    location_id: Yup.number().min(1, "Location required").required("Location required"),
    expertise: Yup.string().required("Expertise required"),
    commisionPercentage: Yup.string().required("Commission percentage required"),
  });

  const closeModel = () => {
    modalOpenClose(false);
  };

  // eslint-disable-next-line no-unused-vars
  const submitBtnHandler = data => {
    const reqData = {
      person: {
        pass: data.pass,
        firstName: data.firstName,
        address: data.address,
        email: data.email,
        telephone: data.telephone
      },
      ssn: data.ssn,
      salary: data.salary,
      location_id: data.location_id,
      expertise: data.expertise,
      commisionPercentage: data.commisionPercentage
    }
    dispatch(addManagerSaga({ data: reqData, closeModel, setIsSubmitted }));
  };
  return (
    <>
      <Model
        headerTitle="Add Manager"
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
            firstName: "Manager 1",
            pass: "abc",
            address: "USA",
            email: "test-m@test.com",
            telephone: "1234567890",
            ssn: "123456789",
            salary: "123",
            location_id: 3,
            expertise: "Abc",
            commisionPercentage: "10",
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
                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUname"
                      name="firstName"
                      value={values.firstName}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={e => {
                        handleBlur(e);
                      }}
                    />
                    <div className="error-message">
                      {errors.firstName && touched.firstName && errors.firstName}
                    </div>
                  </div>

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUname"
                      name="email"
                      value={values.email}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={e => {
                        handleBlur(e);
                      }}
                    />
                    <div className="error-message">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                </div>
                <div className="row">

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">Phone #</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUname"
                      name="telephone"
                      value={values.telephone}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={e => {
                        handleBlur(e);
                      }}
                    />
                    <div className="error-message">
                      {errors.telephone && touched.telephone && errors.telephone}
                    </div>
                  </div>

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input
                      className="form-control finput"
                      name="pass"
                      value={values.pass}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.pass && touched.pass && errors.pass}
                    </div>
                  </div>

                </div>
                
                <div className="row">

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">SSN</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUname"
                      name="ssn"
                      value={values.ssn}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={e => {
                        handleBlur(e);
                      }}
                    />
                    <div className="error-message">
                      {errors.ssn && touched.ssn && errors.ssn}
                    </div>
                  </div>

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputPassword">Salary</label>
                    <input
                      className="form-control finput"
                      name="salary"
                      value={values.salary}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.salary && touched.salary && errors.salary}
                    </div>
                  </div>

                </div>
                
                <div className="row">

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">Expertise</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUname"
                      name="expertise"
                      value={values.expertise}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={e => {
                        handleBlur(e);
                      }}
                    />
                    <div className="error-message">
                      {errors.expertise && touched.expertise && errors.expertise}
                    </div>
                  </div>

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputPassword">Commission Percentage</label>
                    <input
                      className="form-control finput"
                      name="commisionPercentage"
                      value={values.commisionPercentage}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.commisionPercentage 
                      && touched.commisionPercentage 
                      && errors.commisionPercentage}
                    </div>
                  </div>

                </div>
                
                <div className="row">

                  <div className="form-group  col-md-6">
                    <label htmlFor="exampleInputUname">Location</label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="location_id"
                      value={values.location_id}
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
                    <div className="error-message">
                      {errors.location_id && touched.location_id && errors.location_id}
                    </div>
                  </div>

                </div>

                <div className="error-message">{errorMsg}</div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                >
                  Add Part
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

export default AddManager;
