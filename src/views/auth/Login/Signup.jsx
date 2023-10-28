/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { resetErrorMsg, signupSaga } from '../../../store/actions';

import {
  ADDRESS_REQUIRED,
  EMAIL_REQUIRED,
  EMAIL_VALID,
  FIRSTNAME_REQUIRED,
  PASSWORD_REQUIRED,
  PHONE_REQUIRED,
} from '../../../constants/errorConstants';

const Login = props => {
  // const {  } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.auth);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(FIRSTNAME_REQUIRED),
    pass: Yup.string().required(PASSWORD_REQUIRED),
    address: Yup.string().required(ADDRESS_REQUIRED),
    email: Yup.string().email().typeError(EMAIL_VALID).required(EMAIL_REQUIRED),
    telephone: Yup.string().required(PHONE_REQUIRED),
  });

  const submitBtnHandler = values => {
    const requestBody = { ...values };
    // requestBody.deviceToken = localStorage.getItem('gtoken');
    // if (!isNaN(requestBody.email)) {
    //   requestBody.phone = requestBody.email;
    //   requestBody.email = '';
    // }
    dispatch(signupSaga({ data: requestBody, setIsSubmitted }));
  };

  return (
    <div className="row myheightcenter">
      <div className="col-md-12 signin-section d-flex justify-content-center align-items-center">
        <div className="signIn-section-content ">
          <h4 className="mt-5 text-center">Woody’s Automotive</h4>
          <div className='text-center mt-3 mb-3'>
            Sign up
          </div>
          <Formik
            initialValues={{
              pass: "abc",
              firstName: "test",
              address: "123, ABC",
              email: "test@gmail.com",
              telephone: "123467777",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const val = { ...values };
             val.email = val.email.toLowerCase().trim();
              dispatch(resetErrorMsg());
              validationSchema.validate(val);
              setSubmitting(true);
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
              <form className="mt-26" onSubmit={handleSubmit} noValidate>
                <div className="form-group mb-0">
                  <label htmlFor="exampleInputUname">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUname"
                    name="firstName"
                    value={values.firstName}
                    onChange={e => {
                      handleChange(e);
                      dispatch(resetErrorMsg());
                    }}
                    onBlur={e => {
                      handleBlur(e);
                    }}
                  />
                  <div className="error-message">
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                </div>

                <div className="form-group mb-0">
                  <label htmlFor="exampleInputUname">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUname"
                    name="email"
                    value={values.email}
                    onChange={e => {
                      handleChange(e);
                      dispatch(resetErrorMsg());
                    }}
                    onBlur={e => {
                      handleBlur(e);
                    }}
                  />
                  <div className="error-message">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>

                <div className="form-group mb-0">
                  <label htmlFor="exampleInputUname">Phone #</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUname"
                    name="telephone"
                    value={values.telephone}
                    onChange={e => {
                      handleChange(e);
                      dispatch(resetErrorMsg());
                    }}
                    onBlur={e => {
                      handleBlur(e);
                    }}
                  />
                  <div className="error-message">
                    {errors.telephone && touched.telephone && errors.telephone}
                  </div>
                </div>

                <div className="form-group mt-26  mb-3">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input
                  type="password"
                    className="form-control finput"
                    name="pass"
                    value={values.pass}
                    onChange={e => {
                      handleChange(e);
                      dispatch(resetErrorMsg());
                    }}
                    onBlur={handleBlur}
                  />
                  <div className="error-message">
                    {errors.pass && touched.pass && errors.pass}
                  </div>
                </div>

                <div className="error-message">{errorMsg}</div>
                <button
                  type="submit"
                  className="mt-26"
                  disabled={isSubmitted}
                >
                  Sign up
                </button>
              </form>
            )}
          </Formik>
          <p className="mt-4 text-center signIn-text pb-3">
            I already have an account.
            <Link
              to="/"
              className='ml-2'
              style={{ textDecoration: 'underline' }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
