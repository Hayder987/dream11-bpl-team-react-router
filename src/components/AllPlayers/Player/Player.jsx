
import PropTypes from 'prop-types';
import { IoFlagSharp } from "react-icons/io5";

const Player = ({eachPlayer,choosePlayerBtn}) => {
    const {name,logo,country,image,role,battingType,
        bowlingType,biddingPrice
    } = eachPlayer;

    return (
        <div className='border-2 p-4 rounded-xl mb-12'>
            <div className="mb-3">
                <img src={image} alt="" className="h-[280px] w-full object-cover rounded-lg" />
            </div>
            <div className="border-b pb-3">
               <div className="flex gap-4  items-center">
                   <img src={logo} alt="" className="w-12 h-12 rounded-full" />
                   <h3 className="text-xl font-semibold">{name}</h3>
               </div>
               <div className="mt-3 flex justify-between items-center">
                 <p className="flex gap-2 items-center">
                   <span className="text-xl"><IoFlagSharp /></span>
                   <span className="text-gray-500">{country}</span>
                 </p>
                 <div className="py-2 px-4 bg-gray-200 rounded-xl">
                   <p className="">{role}</p>
                 </div>
               </div>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{battingType}</h3>
                    <h3 className="text-gray-500 font-semibold">{bowlingType}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-bold">Price: <span className="text-gray-500">${biddingPrice}</span></h3>
                    <button onClick={()=>choosePlayerBtn(eachPlayer)} className="font-xs border-2 py-2 focus:bg-btnBg hover:bg-gray-200 px-3 rounded-xl">Choose Player</button>
                </div>
            </div>

        </div>
    );
};

Player.propTypes={
    eachPlayer:PropTypes.object.isRequired ,
    choosePlayerBtn: PropTypes.func.isRequired,
}
export default Player;