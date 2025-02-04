
import './banner.css';
import bannerImg from '../../assets/banner-main.png'
import PropTypes from 'prop-types';


const Banner = ({increaseCoin}) => {
    return (
        <div className='bg-black mb-14 mx-3 lg:mx-16 mt-12 rounded-2xl'>
           <div className="bannerBg p-6 md:p-28 rounded-2xl flex flex-col justify-center items-center">
              <img src={bannerImg} alt="" className="" />
              <h1 className="text-white mt-8 mb-6 font-bold text-center text-2xl md:text-4xl">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-xl mb-6 md:text-2xl font-medium text-gray-400">
                Beyond Boundaries Beyond Limits
              </p>
              <div className="border border-gray-300 rounded-2xl p-1">
                <button onClick={increaseCoin} className="font-bold bg-gradient-to-r from-pink-400 to-yellow-500 p-3 rounded-xl">Claim Free Credit</button>
              </div>
           </div> 
        </div>
    );
};

Banner.propTypes={
  increaseCoin:PropTypes.func.isRequired
}


export default Banner;