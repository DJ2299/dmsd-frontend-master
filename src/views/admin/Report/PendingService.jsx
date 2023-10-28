import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReportLSRevenueSaga, getLocationSaga } from '../../../store/actions';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Report = props => {
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState(null);
  const { reportLSRevenueList } = useSelector(
    state => state.report,
  );
  const { locationList } = useSelector(
    state => state.location,
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    let tempDate = date || new Date();

    if(!date) {
      tempDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`;
    }
    setDate(tempDate)
    if(!location) {
      setLocation(locationList && locationList.length ? locationList[0].locationId : 0)
    }

    dispatch(getReportLSRevenueSaga({ data: { date: tempDate, location } }))
  }, [date, location, locationList])

  useEffect(() => {
    dispatch(getLocationSaga())
  }, [])

  return (
    <div className='report'>
      <div className="home">
        <Link to="/report/pending-service"><div>Pending service</div></Link>
        <Link to="/report/revenue"><div>Revenue by Location & Service</div></Link>
        <Link to="/report/top-3"><div>Top 3 location</div></Link>
      </div>
      <div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="start">Start Date </label>
            <input
              className="form-control"
              id="start"
              type="date"
              defaultValue={
                new Date().toISOString().split("T")[0]
              }
              // value={start}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="location">Location</label>
            <select 
              className="form-control"
              id="location"
              value={location}
              onChange={e => {
                setLocation(e.target.value);
                // dispatch(resetErrorMsg());
              }}
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
          </div>
        </div>
      </div>
      <table width='100%' border={1}>
        <thead>
          <tr className='text-center'>
            <th>Location</th>
            <th>Service</th>
            <th>Total Pending*</th>
          </tr>
        </thead>
        <tbody>
        {
            reportLSRevenueList ? reportLSRevenueList.length === 0 ? (
              <tr><td colSpan={3} className="text-center pt-5 pb-5">No data</td></tr> 
            ) : reportLSRevenueList.map(item => (
              <tr>
                <td>{item.locationName}</td>
                <td>{item.serviceName}</td>
                <td>{item.pending_count}</td>
              </tr>
            )) : (
              <tr><td colSpan={3} className="text-center pt-5 pb-5">Loading...</td></tr>
            )
          }
        </tbody>
      </table>
      <p className='text-right'><i>Total pending includes dropped & in progress services*</i></p> 
    </div>
  );
};

export default Report;
