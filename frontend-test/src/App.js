import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/commons/Header';
import Subscribe from './components/Subscribe';
import BrowseCategory from './components/BrowseCategory';
import Footer from './components/commons/Footer';

function App() {
  return (
    <>
      <Header/>
      <Subscribe/>
      <BrowseCategory/>
      <Footer/>
    </>
  );
}

export default App;
