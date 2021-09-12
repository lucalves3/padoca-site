import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import image from './data';

function App() {
  return (
    <>
      <Header imageLogo={ image } />
      <Hero />
    </>
  );
}

export default App;
