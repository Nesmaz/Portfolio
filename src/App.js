import './App.scss';
import Navbar from './components/Nav/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener('scroll', scrrFunction);

    return () => {
      window.removeEventListener('scroll', scrrFunction);
    };
  }, []);

   function scrrFunction(){
    const scrr = document.getElementById('scrr');
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600 ) {
      scrr.style.display = "block";
    } else {
      scrr.style.display = "none";
    }
  }

  return (
    <div className="App">
          <Navbar />
          <Main  />
          <About />
          <Work />
          <Contact  />
          <button id="scrr" onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}>
            <FaArrowCircleUp />
          </button>
    </div>
  );
}

export default App;
