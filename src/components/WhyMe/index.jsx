import React from 'react';

import './style.scss';

export const WhyMe = () => {
    
    return (
        <section id='why-us' className='why-us'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-5' data-aos='fade-up' data-aos-duration="1700">
                        <div className='content'>
                            <h3>Por que quis trabalhar com tecnologia?</h3>
                            <p>
                                Segurança, confidencialidade de dados, aderência à LGPD, são apenas alguns temas que podemos apoiar o
                                seu negócio
                            </p>

                            <div className='text-center'>
                                {/* <a href='https://www.google.com.br/' className='more-btn'>Saiba porque<i className='bx bx-chevron-right'></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-7 d-flex'>
                        <div className='icon-boxes d-flex flex-column justify-content-center'>
                            <div className='row'>
                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-receipt'></i>
                                        <h4>Vontade</h4>
                                        <p>Treinamentos, Consultoria e Certificações</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-cube-alt'></i>
                                        <h4>Desafios</h4>
                                        <p>Pentests, Assessments de segurança e Prevenção contra crimes cibernéticos</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-images'></i>
                                        <h4>Superação</h4>
                                        <p>Softwares mais seguros, Soluções multi-plataforma e Ferramentas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}