import React from 'react';

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import './style.scss';

export const Social = () => {

  function handleClickFacebook() {

  }

  return (
    <section className='social-sec section-bg' data-aos='fade-up' data-aos-duration="1700">
      <div className='container-social container'>
        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='100'>
          <div className='div-outer-icon' onClick={() => handleClickFacebook()}>
            <a href='https://www.facebook.com/arthur.santinati/'>
              <AiOutlineFacebook color='white' />
            </a>
          </div>
          <p className='name-social'>Arthur Santinati</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='400'>
          <div className='div-outer-icon' >
            <a href='https://www.instagram.com/santinatiarthur/'>
              <AiOutlineInstagram color='white' />
            </a>

          </div>
          <p className='name-social'>@santinatiarthur</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='700'>
          <div className='div-outer-icon' >
            <a href='https://www.linkedin.com/in/arthur-santinati/'>
              <AiOutlineLinkedin color='white' />
            </a>

          </div>
          <p className='name-social'>Arthur Santinati</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='1000'>
          <div className='div-outer-icon'>
            <a href='https://wa.me/19999913640'>
              <BsWhatsapp color='white' />
            </a>
          </div>
          <p className='name-social'>(19) 99991-3640</p>
        </div>
      </div>
    </section>
  )
}