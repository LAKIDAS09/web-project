import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/placeorder'
import Footer from './components/footer/footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin} />:<></>}


      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Cart />} />
          < Route path='/order' element={<PlaceOrder />} />

        </Routes>

      </div>
      <Footer />

    </> 
     )
}

      export default App
