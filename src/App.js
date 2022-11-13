import React from 'react';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar';
import PlaceToStay from './pages/PlaceToStay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/places' element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
