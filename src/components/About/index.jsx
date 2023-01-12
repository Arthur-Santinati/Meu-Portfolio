import React from 'react';

import './style.scss';

export const About = () => {
    return (
        <section id='about' className='about section-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative'
                        data-aos-duration="1700" data-aos='fade-right'>
                        {/* <a href='https://www.google.com.br' ></a> */}
                        {/* className='glightbox play-btn mb-4' (PARA ROLAR O VÍDEO COLOCAR NA TAG A ACIMA ESSA className) */}
                    </div>

                    <div className='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5'>
                        <h4 className='border-start border-primary px-4' data-aos-duration="1700" data-aos='fade-up'>Sobre nós</h4>
                        <h3 data-aos-duration="1700" data-aos='fade-up'>Quem nós somos?</h3>
                        <p data-aos-duration="1700" data-aos='fade-up'>
                            A Casttrof é uma empresa brasileira, jovem e vibrante que oferece serviços
                            relacionados com segurança cibernética e privacidade a seus clientes. Somos mais que uma consultoria.
                            <br />
                            <br />
                            Nossa equipe é altamente qualificada pela experiência de mercado e as certificações mais relevantes do
                            setor, tendo como fator crucial de sucesso ouvir nossos clientes e aplicar sua missão e seus valores ao
                            longo das jornadas de adequação e melhoria contínua, com a certeza de que nossa excelência em serviços
                            contribui de forma definitiva para o alto valor agregado no mercado e o sucesso de nossos clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}