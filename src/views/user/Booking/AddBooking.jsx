import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Model from '../../../components/UI/Model/Model';
import { addBookingSaga } from '../../../store/actions';

const AddAppointment = (props) => {
  const { modalOpenClose } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { vehicleList } = useSelector((state) => state.vehicle);
  const { serviceList } = useSelector((state) => state.service);
  const { errorMsg } = useSelector((state) => state.booking);
  const { userData } = useSelector((state) => state.auth);
  const validationSchema = Yup.object({
    vehicleId: Yup.number().min(1, 'Vehicle required').required('Vehicle required'),
    date: Yup.string().required('Appointment date required'),
    serviceId: Yup.array().required('Service Id required'),
  });

  const closeModel = () => {
    modalOpenClose(false);
  };

  const submitBtnHandler = (data) => {
    dispatch(addBookingSaga({ data, closeModel, setIsSubmitted }));
  };

  return (
    <>
      <Model
        headerTitle="Add Appointment"
        modalId="signUpModal"
        modalClass="modal-lg"
        closeModel={closeModel}
      >
        <Formik
          initialValues={{
            customerId: userData.id,
            vehicleId: 0,
            locationId : 5,
            date: '',
            serviceId: [],
            status: 'CREATED',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const val = { ...values };
            val.appointmentDate = `${val.date}`;
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
          }) => (
            <form className="mt-4 mb-4" onSubmit={handleSubmit} noValidate>
              <div className="modal-body px-5 pt-0">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputVehicle">Vehicle</label>
                    <select
                      className="form-control"
                      id="inputVehicle"
                      name="vehicleId"
                      value={values.vehicleId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value={0}>Select</option>
                      {vehicleList &&
                        vehicleList.map((item) => (
                          <option key={item.vehicleId} value={item.vehicleId}>
                            {`${item.vehicleType} ${item.vehicleManufacturer} ${item.vehicleModel}`}
                          </option>
                        ))}
                    </select>
                    <div className="error-message">
                      {errors.vehicleId && touched.vehicleId && errors.vehicleId}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Appointment Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputDate"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="error-message">
                      {errors.date && touched.date && errors.date}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputService">Service</label>
                  <select
                    className="form-control"
                    id="inputService"
                    name="serviceId"
                    multiple
                    value={values.serviceId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: '200px' }}
                  >
                    <option value={0}>Select</option>
                    {serviceList &&
                      serviceList.map((item) => (
                        <option key={item.serviceId} value={item.serviceId}>
                          {item.serviceName}
                        </option>
                      ))}
                  </select>
                  <div className="error-message">
                    {errors.serviceId && touched.serviceId && errors.serviceId}
                  </div>
                </div>
                <div className="error-message">{errorMsg}</div>
                <button type="submit" disabled={isSubmitted}>
                  Add Booking
                </button>
              </div>
            </form>
          )}
        </Formik>
      </Model>
    </>
  );
};

export default AddAppointment;
