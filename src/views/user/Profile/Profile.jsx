/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import { editProfileSaga } from '../../../store/actions';
import './index.css';
import { 
  ADDRESS_REQUIRED, 
  EMAIL_REQUIRED, 
  EMAIL_VALID, 
  FIRSTNAME_REQUIRED, 
  PHONE_REQUIRED
} from '../../../constants/errorConstants';

const Profile = props => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.vehicle);
  const { userData } = useSelector(state => state.auth);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(FIRSTNAME_REQUIRED),
    address: Yup.string().required(ADDRESS_REQUIRED),
    email: Yup.string().email().typeError(EMAIL_VALID).required(EMAIL_REQUIRED),
    telephone: Yup.string().required(PHONE_REQUIRED),
  });

  const submitBtnHandler = data => {
    dispatch(editProfileSaga({ data, setIsSubmitted }));
  };
  return (
    <>
        {/* <div className="row sticky">
          <div className="col pl-5 pr-0 m-h-show">
            <button type="button" className="logo" onClick={() => modalOpenClose(false)}>
              <img src={MOB_PUBCHAT_PNG} alt="Pubchat Logo" data-dismiss="modal" />
            </button>
          </div>
        </div> */}
        <Formik
          initialValues={{
            customerId: userData.id,
            firstName: userData.firstName,
            address: userData.address,
            email: userData.email,
            telephone: userData.telephone,
          }}
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
                    <label htmlFor="inputfname">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      name="firstName"
                      value={values.firstName}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.firstName && touched.firstName && errors.firstName}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputlname">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlname"
                      name="email"
                      value={values.email}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="fusername">Address</label>
                    <input
                      type="text"
                      className="form-control signup-username"
                      id="fusername"
                      name="address"
                      value={values.address}
											onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.address && 
											touched.address && 
											errors.address}
                    </div>
                  </div>
                  <div className="form-group col-md-6 mb-pos setting-selectbox">
                    <label htmlFor="inputPhone">Phone #</label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                      id="inputPhone"
                      name="telephone"
                      value={values.telephone}
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
                      {errors.telephone && touched.telephone && errors.telephone}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                >
                  Update Profile
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
    </>
  );
};

export default Profile;
