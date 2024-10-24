
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [coin, setCoin] = useState(0);
const [seclectedPlayer, setSelectedPlayer] = useState([]);

const increaseCoin =()=>{
  toast.success("Congratulation You Get 5M Dollar!");
  setCoin(coin + 5000000);
};

const choosePlayerBtn=(item)=>{
  const isInclude = seclectedPlayer.find((x=> x.playerId === item.playerId));
  if(seclectedPlayer.length>5){
    toast.error("You Reached Your Maximum-Limits Can't Added Anymore! ")
    return
  }

  if(item.biddingPrice>coin) {
    toast.error("Insufficient-Balance You Need To More Money")
  }
  else{
    if(isInclude){
      toast.error("Player Already Selected")
    }
    else{
      toast.info(
        <div>
          <img src={item.logo} alt={`${item.name} logo`} style={{ width: '36px',borderRadius:"100%", marginLeft: '10px' }} />
          {item.name} Selected To Your Team!
          
        </div>
      );
      setSelectedPlayer([...seclectedPlayer,item])
      setCoin(coin-item.biddingPrice)
    }
    
  }
};

const deleteSelectedPlayer=(selectPlayer)=>{
  toast.warning(`${selectPlayer.name} Was Remove From Your List To add More Player Click Add More Button`)
  const reminingSelectedPlayer = seclectedPlayer.filter(player=> player.playerId !== selectPlayer.playerId)
  setSelectedPlayer(reminingSelectedPlayer);
}



  return (
    <>
      <div className="">
         <NavBar coin={coin}></NavBar>
         <Banner increaseCoin={increaseCoin}></Banner>
         <AllPlayers
          choosePlayerBtn={choosePlayerBtn}
          seclectedPlayer={seclectedPlayer}
          deleteSelectedPlayer={deleteSelectedPlayer}
         ></AllPlayers>
   
   
         <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          toastClassName="custom-toast"
         />
      </div>
    </>
  )
}

export default App
