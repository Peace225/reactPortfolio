import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { UseWindowSize } from './UseWindowSize'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { } from '@fortawesome/free-brands-svg-icons'

function Header() {
  const [showMenu, setShowMenu] = useState(true)
  const[width, height] =UseWindowSize()
  console.log("width", width)
  console.log("height", height)
  useEffect(()=>{
    if(width>=1024){
      setShowMenu(true)
    }
  },[width])

  return (
    <div>
        <header className='header'>
            {/* <Link to="/"  className="logo">BRAD SERGUEÏ KOKOLIKO</Link>  */}
            <img  className='logo' src='./img/logo1.png' alt='logo'/>
            <i className='bx bx-menu' id="menu-icon"></i>
            
            <nav  className="navigation">
                <Link to="/accueil" className="active">Accueil<span></span></Link>
                <Link to="/apropos">A propos<span></span></Link>
                <Link to="/competences">Competences<span></span></Link>
                <Link to="/portfolio">Portfolio<span></span></Link>
                <Link to="/references">References<span></span></Link>
            </nav>
            <div className="header_right">
            <button>
                    <Link to="/contact">Contact</Link>
                </button>
            </div>
                
                
                  

        </header>
          
        

    </div>
   
  );
}

export default Header;