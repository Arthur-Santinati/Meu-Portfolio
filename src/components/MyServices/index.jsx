import React from 'react';

import './style.scss';

export const MyServices = () => {

    function handleClickTrybeTunes() {
        window.location = "https://clinquant-heliotrope-080da0.netlify.app/";
    }

    function handleClickEncookado() {
        window.location = " https://scintillating-raindrop-6d9412.netlify.app/";
    }

    function handleClickTrybeWarts() {
        window.location = "https://harmonious-meerkat-1a2545.netlify.app/";
    }

    function handleClickThinksus() {
        window.location = "https://thinksus.dopster.io/";
    }

    function handleClickTecer() {
        window.location = "https://ats.dopster.io/";
    }


    return (
        <section id='services' className='services'>
            <div className='container'>
                <div className='section-title d-flex justify-content-center' data-aos='fade-up' data-aos-duration="1700">
                    <h2>Meus Projetos</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 card-project' data-aos='fade-down-right' data-aos-duration="1700" onClick={() => handleClickTrybeTunes()}>
                        <div className='icon-box' id="trybe-tunes">
                            <div className='icon'><i class="bi bi-music-note-beamed"></i></div>
                            <h4 className='title'>TrybeTunes</h4>
                            <p className='description'>
                                Neste projeto feito no curso da trybe individualmente fizemos uma brincadeira como se fosse um aplicativo de música parecido com o Spotify, com funcionalidades de poder buscar músicas, favorita-las, e procurar pelo álbum, ele não está com o estilo 100% terminado porém está funcional. (Dísponivel apenas para PC)
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 card-project' data-aos='fade-down-left' data-aos-duration="1700" data-aos-delay='100' onClick={() => handleClickTecer()}>
                        <div className='icon-box h-12'>
                            <div className='icon'><i className='bi bi-card-checklist'></i></div>
                            <h4 className='title'>Tecer</h4>
                            <p className='description'>
                                Neste projeto feito por mim e alguns outros colaboradores da Dopster,no meu emprego atual como desenvolvedor front end, o cliente pediu uma "ATS", que seria um Applicant tracking system, que traduzindo é um sistema de rastreamento de candidatos que permite o tratamento eletrônico das necessidades de recrutamento e contratação. Com funcionalidades de login, registro, casos para esquecer a senha, perfil, adicionar empresas como clientes e várias outras, projeto ainda em andamento. (Dísponivel apenas para PC)
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 card-project' data-aos='fade-up-right' data-aos-duration="1700" data-aos-delay='100' onClick={() => handleClickThinksus()}>
                        <div className='icon-box h-12'>
                            <div className='icon'><i class="bi bi-currency-exchange"></i></div>
                            <h4 className='title'>Thinksus</h4>
                            <p className='description'>
                                Neste projeto feito também durante meu emprego como desenvolvedor, junto há um time de desenvolvedores, o cliente trabalha com indicadores esg que são as 3 siglas para: Governança ambiental, social e corporativa que são uma abordagem para avaliar até que ponto uma corporação trabalha em prol de objetivos sociais que vão além do papel de uma corporação para maximizar os lucros em nome dos acionistas da corporação. Por onde são feitos várias perguntas para avaliar se a empresa é sustentavel ou não, com funcionalidades de login, registro, tradução de linguagem, perfil e várias outras, feito com JavaScript, React, SCSS e HTML.(Dísponivel apenas para PC)
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 card-project' data-aos='fade-up-left' data-aos-duration="1700" data-aos-delay='100' onClick={() => handleClickEncookado()}>
                        <div className='icon-box h-12'>
                            <div className='icon'><i class="bi bi-egg-fried"></i></div>
                            <h4 className='title'>Encookado</h4>
                            <p className='description'>
                                Desenvolvemos um site complexo de busca de receitas de diversas comidas, podendo visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação das receitas e drinks, utilizados ferramentas de dentro do ecossistema React: Hooks e Context API, utilizamos 2 APi's, uma para comidas e outra para bebidas, utilizamos também redux, e gerenciamento de estados, e também a estilização geral feita com CSS. (Dísponivel apenas para PC)
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 card-project' data-aos='fade-up-left' data-aos-duration="1700" data-aos-delay='100' onClick={() => handleClickTrybeWarts()}>
                        <div className='icon-box h-12'>
                            <div className='icon'><i class="bi bi-magic"></i></div>
                            <h4 className='title'>TrybeWarts</h4>
                            <p className='description'>
                                Neste projeto desenvolemos eu e um amigo do curso, uma página de preenchimento de formulário da Escola de magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo verdadeiramente mágico! Feito utilizando apenas HTML, JavaScript e CSS. (Dísponivel apenas para PC)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}