import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { DiVim } from 'react-icons/di';

function RootLayout() {
  return (
    <div>
      <NavBar/>
      <div style={{maxHeight:"700px"}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default RootLayout;
