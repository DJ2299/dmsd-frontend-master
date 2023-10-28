import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { collectPaymentSaga } from '../../../store/actions';

const AddPayment = props => {
  const { modalOpenClose, appointmentId } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.booking);
  // const { userData } = useSelector(state => state.auth);
  const validationSchema = Yup.object({
    paymentMethod : Yup.string().required("Payment method required"),
    // creditCard : Yup.number().required("Location required"),
    creditCard : Yup.string()
      .when('paymentMethod', {
        is: 'CREDIT_CARD',
        then: Yup.string().required("Card card # required"),
        otherwise: Yup.string(),
      }),
  });

  const closeModel = () => {
    modalOpenClose(false);
  };

  // eslint-disable-next-line no-unused-vars
  const submitBtnHandler = data => {
    // console.log("🚀 ~ file: AddPayment.jsx:32 ~ submitBtnHandler ~ data:", data)
    dispatch(collectPaymentSaga({ data, closeModel, setIsSubmitted }));
  };
  return (
    <>
      <Model
        headerTitle="Collect Payment"
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
            id: appointmentId,
            paymentMethod: "",
            creditCard: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const val = { ...values };
            // eslint-disable-next-line prefer-destructuring
            // val.appointmentDate = `${val.date}`;
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
                    <label htmlFor="inputfname">Payment method </label>
                    <select 
                      className="form-control"
                      id="inputPassword"
                      name="paymentMethod"
                      value={values.paymentMethod}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    >
                      <option value="">Select</option>
                      <option value="CASH">Cash</option>
                      <option value="CREDIT_CARD">Credit card</option>
                    </select>
                    {/* <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      name="paymentMethod"
                      value={values.paymentMethod}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    /> */}
                    <div className="error-message">
                      {errors.paymentMethod && touched.paymentMethod && errors.paymentMethod}
                    </div>
                  </div>
                  {values.paymentMethod === 'CREDIT_CARD' && <div className="form-group col-md-6">
                    <label htmlFor="inputlname">Credit card #</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlname"
                      name="creditCard"
                      value={values.creditCard}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.creditCard && touched.creditCard && errors.creditCard}
                    </div>
                  </div>}
                </div>

                <div className="error-message">{errorMsg}</div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                >
                  Collect Payment
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

export default AddPayment;
