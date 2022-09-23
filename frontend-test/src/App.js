import React from 'react';

import Header from './components/commons/Header';
import LearnCoding from './components/LearnCoding';
import BrowseCategory from './components/BrowseCategory';
import Articles from './components/Articles';
import Subscribe from './components/Subscribe';
import Footer from './components/commons/Footer';

function App() {
  return (
    <>
      <Header/>
      <LearnCoding/>
      <BrowseCategory/>
      <Articles/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
