
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
  console.log(item) 
}

  return (
    <>
      <div className="">
         <NavBar coin={coin}></NavBar>
         <Banner increaseCoin={increaseCoin}></Banner>
         <AllPlayers
         choosePlayerBtn={choosePlayerBtn}
         ></AllPlayers>
   
   
         <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          toastClassName="my-custom-toast"
         />
      </div>
    </>
  )
}

export default App
