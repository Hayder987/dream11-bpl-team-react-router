
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'

function App() {
const [coin, setCoin] = useState(0);

const increaseCoin =()=>{
  setCoin(coin + 5000000);
}

  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner increaseCoin={increaseCoin}></Banner>
      <AllPlayers></AllPlayers>
    </>
  )
}

export default App
