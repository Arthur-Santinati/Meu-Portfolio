import React from 'react'
// import { BiRightArrowAlt } from "react-icons/bi";

import './style.scss'

export const Hero = () => {
    return (
        <section id='hero' className='d-flex flex-column justify-content-center align-items-center'>
            <div className='container' data-aos='fade-in' data-aos-duration="1700">
                <h1>Muito prazer, eu sou o Arthur Santinati</h1>
                <h2>Desenvolvedor Front End</h2>
                <div className='d-flex align-items-center'>
                    {/* <i className='bx bxs-right-arrow-alt get-started-icon'> <BiRightArrowAlt /></i> */}
                    {/* <a href='#about' className='btn-get-started scrollto'>Saiba mais</a> */}
                </div>
            </div>
        </section>
    )
}