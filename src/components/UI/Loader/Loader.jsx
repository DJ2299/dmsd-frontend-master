import { LOADING_GIF } from '../../../assets/images';
import './Loader.css';

const Loader = props => {
  const { isFullLoader, width, marginTop, className = '', style = {} } = props;
  return (
    <div
      className={`text-center ${width || 'w-100'} ${isFullLoader && 'full-loader'} ${className} `}
      style={marginTop ? { marginTop, ...style } : { ...style }}
    >
      <img src={LOADING_GIF} alt="" width="30" className="loader-gif-img" />
    </div>
  );
};
export default Loader;
