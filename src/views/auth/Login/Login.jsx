/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { login, resetErrorMsg } from '../../../store/actions';

import {
  EMAIL_REQUIRED,
  EMAIL_VALID,
  PASSWORD_REQUIRED,
} from '../../../constants/errorConstants';

const Login = props => {
  // const {  } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.auth);

  const validationSchema = Yup.object({
    email: Yup.string().email().typeError(EMAIL_VALID).required(EMAIL_REQUIRED),
    pass: Yup.string().required(PASSWORD_REQUIRED),
  });

  const submitBtnHandler = values => {
    const requestBody = { ...values }
    dispatch(login({ requestBody, setIsSubmitted }));
  };

  return (
    <div className="row myheightcenter">
      <div className="col-md-12 signin-section d-flex justify-content-center align-items-center">
        <div className="signIn-section-content ">
          <h4 className="mt-5 text-center">Woody’s Automotive</h4>
          <div className='text-center mt-3 mb-3'>
            Login
          </div>
          <Formik
            initialValues={{
              email: 'test@test.com',
              pass: 'abc',
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
                  <label htmlFor="exampleInputUname">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUname"
                    name="email"
                    // value={values.email}
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

                <div className="form-group mt-26  mb-3">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input
                  type="password"
                    className="form-control finput"
                    name="pass"
                    // value={values.pass}
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
                  Sign in
                </button>
              </form>
            )}
          </Formik>
          <p className="mt-4 text-center signIn-text pb-3">
            I do not already have an account.
            <Link
              to="/sign-up"
              className='ml-2'
              style={{ textDecoration: 'underline' }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
