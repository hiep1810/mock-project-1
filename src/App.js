import './App.css';
import React from 'react';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
