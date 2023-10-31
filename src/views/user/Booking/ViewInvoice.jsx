import React from 'react';
import { LOGO_PNG } from '../../../assets/images';
import Model from '../../../components/UI/Model/Model';

const ViewInvoice = (props) => {
  const { modalOpenClose, data } = props;

  // Function to close the modal
  const closeModel = () => {
    modalOpenClose(null);
  };

  return (
    <div className="invoice-model">
      {/* Render the modal component */}
      <Model
        modalId="signUpModal" // Ensure the modalId is correctly defined
        modalClass="modal-md"
        closeModel={closeModel}
      >
        <div className="col-md-12">
          <div className="row">
            <div className="receipt-main col-12">
              <div className="row">
                <div className="col-6">
                  <div className="receipt-left">
                    <img
                      className="img-responsive"
                      alt="logo"
                      src={LOGO_PNG}
                      style={{ width: 71 }}
                    />
                  </div>
                </div>
                <div className="col-6 text-right">
                  <div className="receipt-right">
                    <h5>Woody's Automotive</h5>
                    <p>+1 XXXX-XXXX <i className="fa fa-phone" /></p>
                    <p>dmsd@test.com <i className="fa fa-envelope-o" /></p>
                    <p>{data.locationName}, USA <i className="fa fa-location-arrow" /></p>
                  </div>
                </div>
              </div>

              <div className="row mt-3 pt-3 mb-3" style={{ borderTop: '1px solid #c5c5c5' }}>
                <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                  <div className="receipt-right">
                    <h5>{data.customerName}</h5>
                    <p><b>Mobile :</b> +1 1234567890</p>
                    <p><b>Email :</b> test@test.com</p>
                    <p><b>Address :</b> {data.locationName}, USA</p>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                  <div className="receipt-left">
                    <h3 className='text-right'>INVOICE<br/> # {data.appointmentId}</h3>
                  </div>
                </div>
              </div>

              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.services.map((service, serviceIndex) => (
                      <React.Fragment key={serviceIndex}>
                        <tr>
                          <td className="col-md-9">{service.serviceName}</td>
                          <td className="col-md-3"></td>
                        </tr>
                        {service.partList.map((part, partIndex) => (
                          <tr key={`${serviceIndex}-${partIndex}`}>
                            <td className="col-md-9">{part.pname}</td>
                            <td className="col-md-3">${part.retailPrice}/-</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    <tr>
                      <td className="text-right">
                        <p>
                          <strong>Total Amount: </strong>
                          <strong>${data.total}</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <h2>
                          <strong>Total: </strong>
                        </h2>
                      </td>
                      <td className="text-left text-danger">
                        <h2>
                          <strong> ${data.services[0].partList.reduce(
                            (total, item) => total + item.retailPrice,
                            0
                          )}/-</strong>
                        </h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                  <div className="receipt-right">
                    <p><b>Date :</b> {data.invoiceDate}</p>
                    <p>Woody's Automotive</p>
                    <p>{data.locationName}, Manager</p>
                    <h5 style={{ color: 'rgb(140, 140, 140)', marginTop: 5 }}>
                      Thanks for servicing.!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
};

export default ViewInvoice;
