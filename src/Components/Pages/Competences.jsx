import React from 'react'
import Data from "../../Data/index.json";
import Header from '../Header';
import Footer from './Footer';
import whatsappLogo from '../Pages/WhatsAppButtonGreenSmall.png'
import { Link } from 'react-router-dom'

function Competences() {
  return (
    <div>
        <Header/>
        <section className='skills--section' id='mySkills'>
            <div className='portfolio--container'>
                <p className='section--title'>Mes Compétences</p>
                <h2 className='skills--section--heading'>Mes Expériences</h2>
            </div>
            <div className='skills--section--container'>
                {Data?.Competences?.map((item, index) =>(
                    <div key={index} className='skills--section--card'>
                        <div className='skills--section--img'>
                            <img src= {item.src} alt='Compétences' /> 
                        </div>
                        <div className='skills--section--card--content'>
                            <h3 className='skills--section--title'>
                                {item.titre}
                            </h3>
                            <p className='skills--section--description'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <div className='fixed-bottom right-100 p-3' style={{zIndex: '6', left: 'initial'}}>
          <Link to='https://wa.me/002250712068137?text=Hello comment pouvous vous aidez ?' target='_blank'>
            <img src={whatsappLogo} width='200' alt='whatsapp'/>
          </Link>
        </div>
        
        <Footer/>
    </div>
  );
}

export default Competences;

    

// import React from 'react'
// import Header from '../Header'
// import { Link } from 'react-router-dom'


// function Competences() {
//   return (
//     <div>
//         <Header/>
//        <section  className="compétences" id="compétences">
//             <h2 className="heading">Mes <span>Compétences</span></h2>
//             <div className="compétences-container">
//                 <div className="compétences-box">
//                     <i className='bx bx-code-alt'></i>
//                     <h3>Developpement Web</h3>
//                     <p> Votre site Web sera construit avec une nouvelle technologie éprouvée.</p>
//                     <Link to="HTML.html" className="btn">Plus de details</Link>

//                 </div>

//                 <div className="compétences-box">
//                     <i className='bx bxs-paint'></i>
//                     <h3>Graphic Design</h3>
//                     <p>J'aborde chaque projet individuellement et je me concentre toujours sur le résultat.</p>
//                     <Link to="/" className="btn">Plus de details</Link>

//                 </div>

//                 <div className="compétences-box">
//                     <i className='bx bx-bar-chart-alt'></i>
//                     <h3>Marketing Digital</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Voluptate vitae sapiente aperiam voluptas soluta fugit doloremque iste deserunt repudiandae rem!</p>
//                     <Link to="/" className="btn">Plus de details</Link>

//                 </div>
//                 <div className="compétences-box">
//                     <i className='bx bx-bar-chart-alt'></i>
//                     <h3>Google Ads</h3>
//                     <p>Votre service ou produit apparaîtra en haut de la recherche Google</p>
//                     <Link to="/" className="btn">Plus de details</Link>

//                 </div>
//                 <div className="compétences-box">
//                     <i className='bx bx-bar-chart-alt'></i>
//                     <h3>Facebook Ads</h3>
//                     <p>Vos clients potentiels voient bien vos services ou produits sur Facebook</p>
//                     <Link to="/" className="btn">Plus de details</Link>

//                 </div>
//             </div>
//         </section>
//     </div>
//   );
// }

// export default Competences;
