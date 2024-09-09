import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/login/login';
import JourneyPath from './components/customerOnboarding/customerJournerPath';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

/* function screenHeight() {
  console.log('window.innerHeight ' + window.innerHeight);
  return window.innerHeight;
} */

function MainLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="slds-grid slds-grid_vertical slds-grid--align-spread" style={{ minHeight: window.innerHeight }}>
      {/* Navbar section */}
      {!isLoginPage && (
        <div className="slds-col">
          <NavBar />
        </div>
      )}

      {/* Routes section (Main Content) */}
      <div className="slds-col slds-col--bump-top slds-col--bump-bottom">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/journey" element={<JourneyPath />} />
        </Routes>
      </div>

      {/* Footer section */}
      {!isLoginPage && (
        <div className="slds-col">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;