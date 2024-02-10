import React from 'react'
import Data from "../../Data/index.json";
import Header from '../Header';
import Footer from './Footer';
import whatsappLogo from '../Pages/WhatsAppButtonGreenSmall.png'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div>
    <Header/>
    <section className='portfolio--section' id='MyPortfolio'>
        <div className='portfolio--container-box'>
            <div className='portfolio--container'>
                <p className='sub--title'>Projets récents</p>
                <h2 className='section--heading'>Mon Portfolio</h2>
            </div>
            <div>

            </div>
        </div>
        <div className='portfolio--section--container'>
            {Data?.Portfolio?.map((item, index) =>(
                <div key={index} className='portfolio--section--card'>
                    <div className='portfolio--section--img'>
                        <img src= {item.src} alt='Placeholder'/>
                    </div>
                    <div className='portfolio--section--card--content'>
                        <div>
                            <h3 className='portfolio--section--title'>
                                {item.titre}
                            </h3>
                            <p className='text-md'>
                                {item.description}
                            </p>
                        </div>
                        <p className='text-sm-portfolio--link'>
                            {item.link}
                            <svg 
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 20 19'
                            fill='none'
                            >
                                <path
                                    d='M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z'
                                    stroke='currentColor'
                                    stroke-width='2.66667'
                                    stroke-strokeLinecap='round'
                                    stroke-strokeLinejoin='round'
                                />
                            </svg>
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
  )
}

export default Portfolio



// import React from 'react'
// import { Link } from 'react-router-dom';
// import Header from '../Header';

// function Portfolio() {
//   return (
//     <div>
//             <Header/>
//             <section className="portfolio" id="portfolio">
//             <h2 className="heading">Dernier <span>Projet</span></h2>
//             <div className="portfolio-container">
//                 <div className="portfolio-box">
//                     <img src="img/Réseaux soc-Récupéré.png" alt=""/>
//                     <div className="portfolio-layer">
//                         <h4>web Design</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
//                         <Link to="#"><i className='bx bx-link-external'></i></Link>
//                     </div>
//                 </div>

//                 <div className="portfolio-box">
//                     <img src="img/affiche pub.png" alt=""/>
//                     <div className="portfolio-layer">
//                         <h4>web Design</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
//                         <Link to="#"><i className='bx bx-link-external'></i></Link>
//                     </div>
//                 </div>

//                 <div className="portfolio-box">
//                     <img src="img/PUB SCAT02.png" alt=""/>
//                     <div className="portfolio-layer">
//                         <h4>web Design</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
//                         <Link to="#"><i className='bx bx-link-external'></i></Link>
//                     </div>
//                 </div>

//                 <div className="portfolio-box">
//                     <img src="img/affiche1.jpg" alt=""/>
//                     <div className="portfolio-layer">
//                         <h4>web Design</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci.</p>
//                         <Link to="#"><i className='bx bx-link-external'></i></Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
//   );
// }

// export default Portfolio;
