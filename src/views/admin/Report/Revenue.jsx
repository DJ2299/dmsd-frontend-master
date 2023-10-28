import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReportRevenueSaga } from '../../../store/actions';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Report = props => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const { reportRevenueList } = useSelector(
    state => state.report,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    let sDate = start || new Date(new Date().setDate(new Date().getDate() - 7));
    let eDate = end || new Date();
    if(!start) {
      sDate = `${sDate.getFullYear()}-${sDate.getMonth() + 1}-${sDate.getDate()}`;
    }
    if(!end) {
      eDate = `${eDate.getFullYear()}-${eDate.getMonth() + 1}-${eDate.getDate()}`;
    }
    setStart(sDate)
    setEnd(eDate)

    dispatch(getReportRevenueSaga({ data: { start: sDate, end: eDate } }))
  }, [start, end])

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
                new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split("T")[0]
              }
              // value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="end">End Date</label>
            <input
              className="form-control"
              id="end"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              // value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table width='100%' border={1}>
            <thead>
              <tr className='text-center'>
                <th>Location</th>
                <th>Service</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
            {
                reportRevenueList ? reportRevenueList.length === 0 ? (
                  <tr><td colSpan={3} className="text-center pt-5 pb-5">No data</td></tr> 
                ) : reportRevenueList.map(item => (
                  <tr>
                    <td>{item.lname}</td>
                    <td>{item.sname}</td>
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
