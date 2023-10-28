import { Link } from 'react-router-dom';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Report = props => {
  console.log("🚀 ~ file: Report.jsx:13 ~ Report ~ props:", props)

  return (
    <div className='report'>
      <div className="home">
        <Link to="/report/pending-service"><div>Pending service</div></Link>
        <Link to="/report/revenue"><div>Revenue by Location & Service</div></Link>
        <Link to="/report/top-3"><div>Top 3 location</div></Link>
      </div>
    </div>
  );
};

export default Report;
