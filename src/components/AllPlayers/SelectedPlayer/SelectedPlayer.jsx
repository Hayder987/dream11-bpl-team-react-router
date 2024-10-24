
import PropTypes from 'prop-types';
import { ImBin } from "react-icons/im";

const SelectedPlayer = ({seclectedPlayer,addMoreBtn, deleteSelectedPlayer}) => {
    return (
        <div className="px-3 lg:px-16 flex gap-4 flex-col">
          {
            seclectedPlayer.map((player, index)=> (
                <div key={index} className="border-2 p-3 flex justify-between items-center rounded-xl">
                   <div className="flex gap-6">
                    <div className="">
                        <img src={player.logo} alt="" className="w-14 h-14 object-cover rounded-lg" />
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold">{player.name}</h3>
                        <p className="text-gray-500">{player.battingType}</p>
                    </div>
                   </div>
                   <div className="">
                    <button onClick={()=> deleteSelectedPlayer(player)} className="text-2xl text-red-500"><ImBin /></button>
                   </div>
                </div>
            ))
          }  
         
         <div className="my-8">
            <div className="border border-black p-2 w-fit rounded-xl">
                <button onClick={addMoreBtn} className="bg-btnBg py-3 px-6 rounded-xl">Add More Player</button>
            </div>
         </div>

        </div>
    );
};

SelectedPlayer.propTypes={
    seclectedPlayer: PropTypes.object.isRequired,
    addMoreBtn:PropTypes.func.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired 
}

export default SelectedPlayer;