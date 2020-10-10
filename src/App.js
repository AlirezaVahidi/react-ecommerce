import React from 'react';
import './App.css';
import Header from './components/main-page/header/Header';
import Main from './components/main-page/main/Main';
import Footer from './components/main-page/footer/Footer';
import Navbar from './components/main-page/navbar/Navbar';
import BasketModal from './UI/basket-modal/BasketModal';

function App() {
  return (
    <div className="App">
      <Header />
      <BasketModal />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
