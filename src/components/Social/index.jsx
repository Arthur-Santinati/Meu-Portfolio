import React from 'react';

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import './style.scss';

export const Social = () => {
  return (
    <section className='social-sec section-bg' data-aos='fade-up' data-aos-duration="1700">
      <div className='container-social container'>
        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='100'>
          <div className='div-outer-icon' >
            {/* <img className='icon-img' src={AiOutlineFacebook} alt='icone-facebbok' /> */}
            <AiOutlineFacebook color='white'/>
          </div>
          <p className='name-social'>@castroff</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='400'>
          <div className='div-outer-icon' >
            {/* <img className='icon-img' src={instagram}  alt='icone-instagram' /> */}
            <AiOutlineInstagram color='white'/>
          </div>
          <p className='name-social'>@castroff</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='700'>
          <div className='div-outer-icon' >
            {/* <img className='icon-img' src={linkedin} alt='icone-linkedin' /> */}
            <AiOutlineLinkedin color='white'/>
          </div>
          <p className='name-social'>@castroff</p>
        </div>

        <div className='social-div' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='1000'>
          <div className='div-outer-icon'>
            {/* <img className='icon-img' src={whatsapp} alt='icone-whatsapp' /> */}
            <BsWhatsapp color='white'/>
          </div>
          <p className='name-social'>@castroff</p>

        </div>
      </div>
    </section>
  )
}