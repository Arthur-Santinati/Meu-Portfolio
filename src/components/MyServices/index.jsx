import React from 'react';

import './style.scss';

export const MyServices = () => {
    return (
        <section id='services' className='services'>
            <div className='container'>

                <div className='section-title d-flex justify-content-center' data-aos='fade-up' data-aos-duration="1700">
                    <h2>Serviços</h2>
                    {/* <p>Nós da Casttrof oferecemos serviços de ponta, que vão desde cursos a CYBER SEGURANÇA e LGPD.</p> */}
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12' data-aos='fade-up' data-aos-duration="1700">
                        <div className='icon-box'>
                            <div className='icon'><i className='bi bi-briefcase'></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>CYBER SEGURANÇA</a></h4>
                            <p className='description'>
                                Avaliação de Segurança: Avaliação abrangente sobre as vulnerabilidades existentes
                                no ambiente do cliente - Recon.
                                Pentests: Exploração sistemática e independente de vulnerabilidades, com foco restrito às áreas
                                determinadas e oportunidades de melhoria.
                                Desenvolvimento Seguro: Avaliações de código e security & privacy by design.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12' data-aos='fade-up' data-aos-duration="1700" data-aos-delay='100'>
                        <div className='icon-box h-12'>
                            <div className='icon'><i className='bi bi-card-checklist'></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>LGPD</a></h4>
                            <p className='description'>Treinamento e Workshops: Oferecemos treinamentos focados nos conceitos e aplicação
                                da Lei Geral de Proteção de Dados em situações do dia a dia de negócio.
                                Projetos de adequação: Mapeamento dos processos e fluxos de dados, com construção de roadmap de
                                adequação, integrando as áreas de negócio da empresa, com a conscientização de papéis e
                                responsabilidades, além das entregas previstas em lei.
                                Operações: DPO as a Service: Atuação pontual ou contínua, representando e dando suporte à empresa nas
                                operações relacionadas com a privacidade dos titulares de dados internos e externos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}