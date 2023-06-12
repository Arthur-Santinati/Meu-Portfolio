import React from 'react';

import './style.scss';

export const About = () => {
    return (
        <section id='about' className='about section-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative'
                        data-aos-duration="1700" data-aos='fade-right'>
                    </div>

                    <div className='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5'>
                        <h4 className='border-start border-primary px-4' data-aos-duration="1700" data-aos='fade-up'>Sobre mim</h4>
                        <h3 data-aos-duration="1700" data-aos='fade-up'>Quem sou eu?</h3>
                        <p data-aos-duration="1700" data-aos='fade-up'>
                            Nasci em Americana - SP em fevereiro de 2002, tenho 21 anos, e moro com meus pais e meu irmão mais novo. Me formei no ensino médio no colégio Dom Bosco em 2019 e terminei meu curso da <b>Trybe</b> em fevereiro de 2023.
                            <br />
                            <br />
                            Minha história no mundo da tecnologia começou assim que sai do ensino médio, tinha que decidir qual caminho seguir, até que surgiu a oportunidade de ir fazer um intercâmbio para a Irlanda, lugar onde trabalhei, estudei, e morei lá durante 6 meses. Com as experiencias que adquiri lá, voltei querendo trabalhar com programação ou algo do tipo, e assim fui pesquisando até encontrar a trybe, e começar a estudar sozinho para conseguir passar nos testes para poder cursar  curso de desenvolvimento Full Stack de 1 ano, onde aprendi fundamentos do desenvolvimento web, front-end, back-end e fundamentos da ciência da computação.
                            <br />
                            <br />
                            E assim que conheci o front-end me apaixonei pela criação de sites e o poder que isso tinha, e no curso fiz mais de 35 projetos, 1500 horas de aula, e aprendi várias linguagens, bibliotecas, e algumas delas são: JavaScript, Python, React, CSS, HTML, TypeScript, e muitas aulas de softSkills e principalmente como trabalhar, ponto muito valioso que a trybe prega para os alunos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}