import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import image from './data';

function App() {
  return (
    <>
      <Header imageLogo={ image } />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
