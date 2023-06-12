import React from 'react';

import './style.scss';

export const Experiences = () => {
    return (
        <section id='about' className='experiences section-bg'>
            <div className='container'>
                <div className='row'>
                <div className='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5'>
                    <h4 className='border-start border-primary px-4' data-aos-duration="1700" data-aos='fade-right'>Minhas experiências</h4>
                        <h3 data-aos-duration="1700" data-aos='fade-up'>Com o que trabalhei até agora?</h3>
                        <p data-aos-duration="1700" data-aos='fade-up'>
                            Em julho de 2022 entrei em uma empresa chamada Dopster, como desenvolvedor Front-end Junior e segui com eles até março desse ano, trabalhando com React, Sass e Css, figma, e vários frameworks.
                            <br />
                            <br />
                            Segui com eles até março quando recebi uma proposta em uma empresa que se chama ASC Solutions, que continuo com eles trabalhando até o momento, e nessa empresa aprendi a trabalhar com Angular, usando o Azure como DevOps, e também comecei a desenvolver aplicativos usando Ionic, Capacitor e Android Studio, onde continuo aprendendo mais e mais a cada dia.
                            <br />
                            <br />
                            Porém mesmo trabalhando sigo procurando oportunidades melhores sempre que puder, para continuar evoluindo e me tornar um desenvolvedor melhor.
                        </p>
                    </div>
                    <div className='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative'
                        data-aos-duration="1700" data-aos='fade-left'>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}