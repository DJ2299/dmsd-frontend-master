import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import Model from '../../../components/UI/Model/Model';
import { addPartSaga } from '../../../store/actions';

const AddPart = props => {
  const { modalOpenClose } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.booking);
  const validationSchema = Yup.object({
    pname: Yup.string().required("Part name required"),
    // quantity: Yup.number().min(1, "Quantity required").required("Quantity required"),
    retailPrice: Yup.number().min(1, "Retail price required").required("Retail price required"),
  });

  const closeModel = () => {
    modalOpenClose(false);
  };

  // eslint-disable-next-line no-unused-vars
  const submitBtnHandler = data => {
    dispatch(addPartSaga({ data, closeModel, setIsSubmitted }));
  };
  return (
    <>
      <Model
        headerTitle="Add Part"
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
            pname: "Part 4",
            // quantity: 4,
            retailPrice: 100,
            // status:"IN_STOCK"
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
                    <label htmlFor="inputfname">Part Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfname"
                      name="pname"
                      value={values.pname}
                      onChange={e => {
                        handleChange(e);
                        // dispatch(resetErrorMsg());
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.pname && touched.pname && errors.pname}
                    </div>
                  </div>
                  {/* <div className="form-group col-md-6">
                    <label htmlFor="inputlname">Quantity</label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                      id="inputPhone"
                      name="quantity"
                      value={values.quantity}
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
                      {errors.quantity && touched.quantity && errors.quantity}
                    </div>
                  </div> */}
                  <div className="form-group col-md-6">
                    <label htmlFor="fusername">Retail Price</label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                      id="inputPhone"
                      name="retailPrice"
                      value={values.retailPrice}
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
                      {errors.retailPrice && 
											touched.retailPrice && 
											errors.retailPrice}
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

export default AddPart;
