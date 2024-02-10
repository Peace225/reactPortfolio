import React from 'react';
import Header from '../Header';
import Footer from './Footer';
import whatsappLogo from '../Pages/WhatsAppButtonGreenSmall.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <Header/>
        <section id='Contact' className='contact-section'>
          <div>
            <p className='sub--title'>Envoie-nous un message</p>
            <h2>Contactez-Nous</h2>
            <p className='text-lg'>Nous sommes ouverts à toute suggestion pour discuter sur votre projet de site web. </p>
            <p className='text-lg'>Tels que : <span>Portfolio, E-Commerce, site d'Entreprise, Application web & Mobile...</span> </p>
          </div>
          <form className='contact--form--container'>
            <div className='container'>
              <label htmlFor='last-name' className='contact--label'>
                <span className='text-md'>Nom</span>
                <input type='text' className='contact--input text-md' name='nom de famille' id='last-name' placeholder='Entrez votre nom de famille' required/>
              </label>
              <label htmlFor='first-name' className='contact--label'>
                <span className='text-md'>Prénoms</span>
                <input type='text' className='contact--input text-md' name='prénoms' id='first-name' placeholder='Entrez votre prénoms' required/>
              </label>
              <label htmlFor='email' className='contact--label'>
                <span className='text-md'>Email</span>
                <input type='email' className='contact--input text-md' name='email' id='email' placeholder='Entrez votre adresse email' required/>
              </label>
              <label htmlFor='numero-telephone' className='contact--label'>
                <span className='text-md'>Numéro de Téléphone</span>
                <input type='numero' className='contact--input text-md' name='numéro de téléphone' id='numéro de téléphone' placeholder='ex: (+225)0000' required/>
              </label>
            </div>
            {/* <label htmlFor='choose-topic' className='contact--label'>
                <span className='text-md'>Choisir un sujet</span>
                <select id='choose-topic' className='cntact--input-text-md'>
                  <option>Selectionnez-en un...</option>
                  <option>Article 1</option>
                  <option>Article 2</option>
                  <option>Article 3</option>
                </select> 
              </label> */}
              <label htmlFor='message' className='contact--label'>
                <span className='text-md'>Message</span>
                <textarea className='contact--input text-md' id='message' rows='8' placeholder='écrivez votre message'/>
              </label>
              <label htmlFor='checkboc' className='checkbox--label'>
                <input type='checkbox' required name='checkbox' id='checkbox'/>
                <span className='text-sm'>J'accepte les conditions</span>
              </label>
              <div><button className='btn btn-primary contact--form--btn'>Soumettre</button></div>
          </form>
        </section>
        <div className='fixed-bottom right-100 p-3' style={{zIndex: '6', left: 'initial'}}>
          <Link to='https://wa.me/002250712068137?text=Hello comment pouvous vous aidez ?' target='_blank'>
            <img src={whatsappLogo} width='200' alt='whatsapp'/>
          </Link>
        </div>
        <Footer/>
      {/* <section className="contact" id="contact">
        <h2 className="heading">Con<span>tact!</span></h2>

        <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Votre Nom"/>
                <input type="email" placeholder="Votre Email"/>
            </div>
            <div className="input-box">
                <input type="numéro" placeholder="Numéro de Téléphone"/>
                <input type="text" placeholder="Sujet"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Votre Message"></textarea>
            <input type="Soumettre" value="Envoyer votre Message"  className="btn"/>
        </form>
    </section> */}
    </div>
  );
}

export default Contact;
