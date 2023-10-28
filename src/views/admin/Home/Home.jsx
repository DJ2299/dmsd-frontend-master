import { Link } from 'react-router-dom';
import './index.css';

// eslint-disable-next-line no-unused-vars
const Home = props => {
  console.log("🚀 ~ file: Home.jsx:13 ~ Home ~ props:", props)

  return (
    <>
      <div style={{ textAlign: 'right', width: '100%', padding: 20, paddingBottom: 0 }}>
        Date: {new Date().toDateString()}
      </div>
      <div className="home">
        <Link to="/customer"><div>Customer</div></Link>
        <Link to="/technician"><div>Technician</div></Link>
        <Link to="/manager"><div>Manager</div></Link>
        <Link to="/location"><div>Location</div></Link>
      </div>
      <div className="home">
        <Link to="/service"><div>Service</div></Link>
        <Link to="/parts"><div>Parts</div></Link>
        <Link to="/booking"><div>Booking</div></Link>
        <Link to="/report"><div>Report</div></Link>
      </div>
    </>
  );
};

export default Home;
