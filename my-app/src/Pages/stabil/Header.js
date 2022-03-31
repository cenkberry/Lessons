import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
  return(
    <div className="header bg-red-700">
          <img className="mx-auto px-2" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" alt="" srcset="" />
          
          <nav className='fac fje pr-4 space-x-4'>
          <Link to="/" className="btn btn-green">Home</Link>
          <Link to="/about" className="btn btn-blue">About</Link>
          <Link to="/contact" className="btn btn-yellow">Contact</Link>
          </nav>
    </div>
  )
}

export default Header;