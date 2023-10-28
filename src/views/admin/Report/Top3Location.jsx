import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReportTopRevenueSaga } from '../../../store/actions';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Report = props => {
  const { reportTopRevenueList } = useSelector(
    state => state.report,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReportTopRevenueSaga())
  }, [])

  return (
    <div className='report'>
      <div className="home">
        <Link to="/report/pending-service"><div>Pending service</div></Link>
        <Link to="/report/revenue"><div>Revenue by Location & Service</div></Link>
        <Link to="/report/top-3"><div>Top 3 location</div></Link>
      </div>
      <table width='100%' border={1}>
        <thead>
          <tr className='text-center'>
            <th>Location</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
        {
            reportTopRevenueList ? reportTopRevenueList.length === 0 ? (
              <tr><td colSpan={3} className="text-center pt-5 pb-5">No data</td></tr> 
            ) : reportTopRevenueList.map(item => (
              <tr>
                <td>{item.locationName}</td>
                <td>${item.revenue}</td>
              </tr>
            )) : (
              <tr><td colSpan={3} className="text-center pt-5 pb-5">Loading...</td></tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Report;
