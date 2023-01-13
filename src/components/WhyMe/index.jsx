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
                                Aqui estão alguns pontos pelo qual pensei bastante antes de entrar nesse mundo gigante que é a tecnologia.
                            </p>
                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-7 d-flex'>
                        <div className='icon-boxes d-flex flex-column justify-content-center'>
                            <div className='row'>
                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-receipt'></i>
                                        <h4>Vontade</h4>
                                        <p>Sempre tive vontade de entender o que acontecia por trás dos sites, aplicativos, como as coisas aconteciam em um passe de "mágica".</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='200' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-cube-alt'></i>
                                        <h4>Desafios</h4>
                                        <p>O mundo da programação gira em torno de resolver problemas, bugs, melhorar a cada dia, e esse desafio sempre me deixou instigado a ser uma dessas pessoas que resolvem bugs e deixam tudo funcionando.</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='300' data-aos-duration="1700">
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <i className='bx bx-images'></i>
                                        <h4>Superação</h4>
                                        <p>Um progamador se supera a cada dia, construindo códigos funcionais e úteis, e esse sentimento de se superar sempre me inspirou a ser um desenvolvedor.</p>
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