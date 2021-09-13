import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import image from './data';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header imageLogo={ image } />
        <Hero />
        <Main />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
