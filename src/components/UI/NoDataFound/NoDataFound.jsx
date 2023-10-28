import { NO_DATA_SVG } from '../../../assets/images';

const NoDataFound = props => {
  const { text = 'No data found', className = '', style = {} } = props;
  return (
    <div className={`profile_followers_list no-data-found-label w-100 ${className}`} style={style}>
      {text || <img src={NO_DATA_SVG} alt="" width="250" />}
    </div>
  );
};

export default NoDataFound;
