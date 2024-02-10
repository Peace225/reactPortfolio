import React from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <Header/>
       <footer className="footer">
        <div className="footer-tex">
            <p>Copyright &copy; 2023 by Brad KOKOLIKO / All Rights Reserved</p>
        </div>

        <div className="footer-iconTop">
            <Link href="#home"><i className='bx bx-up-arrow-alt'></i></Link>
        </div>
    </footer>
    </div>
  );
}

export default Footer;
