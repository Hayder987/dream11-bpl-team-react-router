import { useEffect, useState } from "react";
import Player from "./Player/Player";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";
import PropTypes from 'prop-types';



const AllPlayers = ({choosePlayerBtn}) => {
 
    const [Players, setPlayers] = useState([]);
    const [conditionDisplay, setConditionDisplay] = useState(true);

    useEffect(()=>{
        const fetchData= async()=>{
          const res = await fetch("./players.json");
          const data = await res.json();
          setPlayers(data);
        }
        fetchData()
    },[])
   const allPlayerBtnHanderllar =()=>{
    setConditionDisplay(true);  
   }

   const selectPlayerBtnHanderllar =()=>{
    setConditionDisplay(false);  
   }

    return (
        <div className="px-3 lg:px-16 ">
            <div className="flex bg-navBg backdrop-blur-md justify-between items-center sticky top-[110px] right-0  py-4">
                <h1 className="text-base md:text-3xl font-bold">
                    {conditionDisplay?"Available Players":"Selected Player (0/6)"}
                    </h1>
                <div className="flex gap-3 ">
                    <button onClick={allPlayerBtnHanderllar} 
                     className={`border py-3 px-5 rounded-xl font-bold 
                     ${conditionDisplay?"bg-btnBg":"bg-white"}`}>
                        Available
                    </button>
                    <button onClick={selectPlayerBtnHanderllar}
                         className={`border py-3 px-5 rounded-xl font-bold 
                         ${!conditionDisplay?"bg-btnBg":"bg-white"}`}>
                          Selected (0)
                    </button>
                </div>
            </div>
            <div className="mt-6">
                
                <div className=" ">
                    {conditionDisplay?
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                         Players.map((eachPlayer=> <Player 
                            key={eachPlayer.playerId}
                            eachPlayer={eachPlayer}
                            choosePlayerBtn={choosePlayerBtn}
                            ></Player>))    
                       } 
                    </div>: 
                    <div className="">
                       <SelectedPlayer ></SelectedPlayer>
                    </div>
                    }
                    
                </div>
                
            </div>
            
        </div>
    );
};

AllPlayers.propTypes={
    choosePlayerBtn: PropTypes.func.isRequired  
}

export default AllPlayers;