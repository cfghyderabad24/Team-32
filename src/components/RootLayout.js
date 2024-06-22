import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { DiVim } from 'react-icons/di';

function RootLayout() {
  return (
    <div>
      <NavBar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default RootLayout;
