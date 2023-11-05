import { useState } from 'react';
import './App.css';
import HeaderImg from './components/HeaderImg';
import HeaderTitle from './components/HeaderTitle';
import Buttons from './components/Buttons';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='container'>
        <HeaderImg />
        <HeaderTitle />
        <Buttons />
        <About />
        <Interest />
        <Footer />
      </div>
    </>
  )
}

export default App
