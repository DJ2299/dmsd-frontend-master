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
        </p>
      </td>
      <td>
        <p>
          {/* Add the total amount value here */}
        </p>
      </td>
    </tr>
  </tbody>
</table>
