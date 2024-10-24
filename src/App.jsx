
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa'; 

function App() {
const [coin, setCoin] = useState(0);

const increaseCoin =()=>{
  toast.success("Congratulation You Get 5M Dollar!", {
    icon: <FaCheckCircle color="green" size={24} />, 
  });
  setTimeout(()=>{
    setCoin(coin + 5000000);
  },2400)
}

  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner increaseCoin={increaseCoin}></Banner>
      <AllPlayers></AllPlayers>


      <ToastContainer
       position="top-right"
       autoClose={2000}
       hideProgressBar={false}
       closeOnClick
       pauseOnHover
       draggable
       toastClassName="my-custom-toast"
      />
    </>
  )
}

export default App
