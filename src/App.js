import './App.scss';
import Navbar from './components/Nav/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {

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
