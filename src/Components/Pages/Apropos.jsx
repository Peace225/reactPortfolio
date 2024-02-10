import React from 'react'
import Footer from './Footer'
import Header from '../Header';
import whatsappLogo from '../Pages/WhatsAppButtonGreenSmall.png';
import { Link } from 'react-router-dom'


function Apropos() {
  return (
    <div>
    <Header/>
    <section id='AboutMe' className='about--section'>
      <div className='about--section--img'>
        <img src='./img/brad.png' alt='About Me'/>
      </div>
      <div className='hero--section--content--box
      about--section--box'>
        <div className='hero--section--content'>
          <p className='section--title'>Apropos</p>
          <h1 className='skills--section--heading'>Apropos de Moi</h1>
          <p className='hero--section-description'>Hello, je développe des sites Web depuis plus de 5 ans, je suis un développeur Web full stack en technologie. J'utilise <span> MERN</span> (Mongo DB, Express, React Js et Node Js).   Je crée des sites Web réactifs qui s'affichent sur tous les appareils, ordinateurs de bureau et smartphones.</p>
          <p className='hero--section-description'>Bien sûr, avant de commencer à développer une application Web, une landing page, un site Web professionnel ou un E-commerce, j'ai besoin d'une mise en page de projet prête à l'emploi (croquis) et je suis prêt à le faire pour vous. Avant de commencer à développer votre site Web.     </p>
          <p className='hero--section-description'>Nous  discuterons ensemble de tous les détails de votre niche, je mènerai une enquête auprès de vos concurrents et dresserai une liste de leurs avantages et faiblesses. Tout cela est nécessaire pour offrir à vos clients quelque chose que vos concurrents ne proposent pas, ou pour le présenter également, mais mieux, une fois le site Web terminé et prêt à déployer et à vendre un produit ou un service, il est essentiel que vos clients potentiels vous connaissent. Je créerai pour vous une campagne publicitaire sur Google Ads et Facebook Ads</p>
        </div>
      </div>
      <div className='fixed-bottom right-100 p-3' style={{zIndex: '6', left: 'initial'}}>
          <Link to='https://wa.me/002250712068137?text=Hello comment pouvous vous aidez ?' target='_blank'>
            <img src={whatsappLogo} width='200' alt='whatsapp'/>
          </Link>
        </div>
    </section>

    <Footer/>  
    </div>
  )
}

export default Apropos


// import React from 'react'
// import Footer from './Footer';
// import { Link } from 'react-router-dom';
// import Header from '../Header';

// function Apropos() {
//   return (
//     <div>
//         <Header/>
//       <section className="apropos" id="apropos">
//             <div className="apropos-img">
//                 <img src="./img/brad.png" alt="photo_profil"/>
//             </div>

//             <div className="apropos-content">
//                 <h2 className="heading">Apropos <span>de moi</span></h2>
//                 <h3><span>Developpeur web Full-Stack !</span></h3>
//                 <p> Hello, je développe des sites Web depuis plus de 5 ans, je suis un développeur Web full stack en technologie.
//                  <br/> J'utilise <span> MERN</span> (Mongo DB, Express, React Js et Node Js).
//                     Je crée des sites Web réactifs qui s'affichent sur tous les appareils, ordinateurs de bureau et smartphones. Bien sûr, avant de commencer à développer une application Web, une landing page, un site Web professionnel ou un E-commerce, j'ai besoin d'une mise en page de projet prête à l'emploi (croquis) et je suis prêt à le faire pour vous. Avant de commencer à développer votre site Web, nous  discuterons ensemble de tous les détails de votre niche, je mènerai une enquête auprès de vos concurrents et dresserai une liste de leurs avantages et faiblesses. Tout cela est nécessaire pour offrir à vos clients quelque chose que vos concurrents ne proposent pas, ou pour le présenter également, mais mieux, une fois le site Web terminé et prêt à déployer et à vendre un produit ou un service, il est essentiel que vos clients potentiels vous connaissent. Je créerai pour vous une campagne publicitaire sur Google Ads et Facebook Ads</p>
                
//                 <Link to="/plus de details" className="btn">Plus de details</Link>
//             </div>
//         </section>
//         <Footer/>

//     </div>
//   );
// }

// export default Apropos;
