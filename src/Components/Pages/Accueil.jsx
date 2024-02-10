import React from 'react'
import Header from '../Header'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import whatsappLogo from '../Pages/WhatsAppButtonGreenSmall.png';

function Accueil() {
  return (
    <div>
      <Header/>
      <section className="home" id="home">
        <div className="home-content">
            <h3>Hello ! J'suis BRAD SERGUEÏ KOKOLIKO </h3>
            <h1>Developpeur</h1>
            <h1><span> Full-Stack</span></h1>
            <p>Je réalise des applications web avec des Frameworks <span>React </span> et des
            <br/>
            Applications mobile (<span>Android & IOS</span>) avec des Frameworks <span>React Native. </span><br/>
            Et une bonne connaissance de languages de balisages en programmation web.</p>
            <div className="social-media">
                <Link to="/"><FaGithub/></Link>
                <Link to="/"><FaInstagram/></Link>
                <Link to="/"><FaFacebook/></Link>
                <Link to="/"><FaLinkedin/></Link>
            </div>
                <Link to="./img/CV DEVELOPFULLSTAKE.pdf" download className="btn">Télécharger mon CV</Link>
            
           
        </div>
        <div className="home-img">
            <img src="./img/Accueil3.png" alt="Photo_Accueil"/>
        </div>
        <div className='fixed-bottom right-100 p-3' style={{zIndex: '6', left: 'initial'}}>
          <Link to='https://wa.me/002250712068137?text=Hello comment pouvous vous aidez ?' target='_blank'>
            <img src={whatsappLogo} width='200' alt='whatsapp'/>
          </Link>
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Accueil;
