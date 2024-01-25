import React from 'react';
import './App.css';
import Footer from './Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Players from './Players'; // Import Players component
import Detail from './Detail';
import { Routes, Route } from 'react-router-dom';

function AppNav() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default AppNav;
