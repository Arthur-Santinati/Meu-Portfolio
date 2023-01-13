import React from 'react';
import { BiEnvelope, BiPhoneCall } from 'react-icons/bi';
import './style.scss';

export const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>

        <div className='section-title'>
          <h2 data-aos='fade-up' data-aos-duration="1700">Contato</h2>
          <p data-aos='fade-up' data-aos-duration="1700">Entre em contato comigo e vamos conversar, estou no aguardo do seu contato.
          </p>
        </div>

        <div className='row justify-content-center'>

          {/* <div className='col-xl-3 col-lg-4 mt-4' data-aos='fade-up' data-aos-duration="1700">
            <div className='info-box'>
              <i className='bx bx-map' ><BiMap /></i>
              <h3>Endereço</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div> */}

          <div className='col-xl-3 col-lg-4 mt-4' data-aos='fade-right' data-aos-duration="1700" data-aos-delay='100'>
            <div className='info-box'>
              <i className='bx bx-envelope'><BiEnvelope /></i>
              <h3>E-mail</h3>
              <p>arthursantinati02@outlook.com</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 mt-4' data-aos='fade-left' data-aos-duration="1700" data-aos-delay='200'>
            <div className='info-box' onClick=''>
              <i className='bx bx-phone-call'><BiPhoneCall /></i>
              <h3>Telefones</h3>
              <p>(19) 99991-3640</p>
            </div>
          </div>
        </div>

        <div className='row justify-content-center' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='300'>
          <div className='col-xl-9 col-lg-12 mt-4'>
            <form action='forms/contact.php' method='post' className='php-email-form'>
              <div className='row'>
                <div className='col-md-6 form-group'>
                  <input type='text' name='name' className='form-control' id='name' placeholder='Nome' required />
                </div>
                <div className='col-md-6 form-group mt-3 mt-md-0'>
                  <input type='email' className='form-control' name='email' id='email' placeholder='Email' required />
                </div>
              </div>
              <div className='form-group mt-3'>
                <input type='text' className='form-control' name='subject' id='subject' placeholder='Descrição' required />
              </div>
              <div className='form-group mt-3'>
                <textarea className='form-control' name='message' rows='5' placeholder='Mensagem' required></textarea>
              </div>
              <div className='my-3'>
                <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>Sua mensagem foi enviada com sucesso, obrigado!</div>
              </div>
              <div className='text-center'><button type='submit'>Enviar mensagem</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}