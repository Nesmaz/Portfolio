import "./Navbar.scss"
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleButton = ()=> setIsMenuOpen(!isMenuOpen);

return (
    <BrowserRouter>
      <div className="navbar">
        <div className="buttons" onClick={ handleButton }>
          {isMenuOpen ? (
            <FaTimes id="exit" />
            ) : (
              <FaBars id="open" />
            )}
        </div>
          <ul className={ isMenuOpen ? "nav-container active" : "nav-container"}>
            <li><Link smooth to="#home"> Home</Link></li>
            <li><Link smooth to="#about">About</Link></li>
            <li><Link smooth to="#work">Work</Link></li>
            <li><Link smooth to="#contact">Contact</Link></li>
          </ul>
      </div>
    </BrowserRouter>
  );
};

export default Navbar
