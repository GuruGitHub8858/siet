import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import './app.css'
const App = () => {

  function clickme() {
    console.log("action done");
  }
  return (
    <div className="container">

      <div className="header"><Header /></div>
      <div className="body"><Body fun={clickme} /></div>
      <div className="footer"><Footer /></div>
    </div>
  )
}

export default App
