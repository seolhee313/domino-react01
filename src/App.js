import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={'Roboto'} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer attr={'Roboto'} />
    </BrowserRouter>
  );
};

export default App;
