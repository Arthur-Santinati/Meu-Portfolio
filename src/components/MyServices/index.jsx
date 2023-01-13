import React from 'react';

import './style.scss';

export const MyServices = () => {
    return (
        <section id='services' className='services'>
            <div className='container'>

                <div className='section-title d-flex justify-content-center' data-aos='fade-up' data-aos-duration="1700">
                    <h2>Meus Projetos</h2>
                    {/* <p>Nós da Casttrof oferecemos serviços de ponta, que vão desde cursos a CYBER SEGURANÇA e LGPD.</p> */}
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12' data-aos='fade-down-right' data-aos-duration="1700">
                        <div className='icon-box'>
                            <div className='icon'><i class="bi bi-truck"></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>Aplicativo de delivery</a></h4>
                            <p className='description'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ea dignissimos, quae neque quas aperiam, distinctio expedita aspernatur placeat optio dolorem veritatis repellendus maxime eveniet aliquid similique laudantium necessitatibus ut!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aliquam deserunt repudiandae, magnam itaque corrupti esse sapiente sed cumque voluptates omnis tempora neque tenetur quod sit culpa. Repellat, itaque laudantium.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12' data-aos='fade-down-left' data-aos-duration="1700" data-aos-delay='100'>
                        <div className='icon-box h-12'>
                            <div className='icon'><i className='bi bi-card-checklist'></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>Tecer</a></h4>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sunt optio ullam fugit quo sit assumenda sapiente. Dolore quae aliquid est quisquam aperiam. Recusandae aspernatur, mollitia debitis consequuntur ea a?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore aliquam inventore iusto facilis consequatur fugit eligendi consectetur cumque omnis dolor, voluptatibus ipsum rem id quisquam, nisi repellat? Asperiores, libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis veniam sequi voluptates exercitationem ipsam debitis eaque, id optio. Eveniet autem quo unde, rerum deserunt dolorem necessitatibus fugiat provident sint.
                            </p>
                        </div>
                    </div>
                    
                    <div className='col-lg-12 col-md-12' data-aos='fade-up-right' data-aos-duration="1700" data-aos-delay='100'>
                        <div className='icon-box h-12'>
                            <div className='icon'><i class="bi bi-currency-exchange"></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>Thinksus</a></h4>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sunt optio ullam fugit quo sit assumenda sapiente. Dolore quae aliquid est quisquam aperiam. Recusandae aspernatur, mollitia debitis consequuntur ea a?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore aliquam inventore iusto facilis consequatur fugit eligendi consectetur cumque omnis dolor, voluptatibus ipsum rem id quisquam, nisi repellat? Asperiores, libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis veniam sequi voluptates exercitationem ipsam debitis eaque, id optio. Eveniet autem quo unde, rerum deserunt dolorem necessitatibus fugiat provident sint.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12' data-aos='fade-up-left' data-aos-duration="1700" data-aos-delay='100'>
                        <div className='icon-box h-12'>
                            <div className='icon'><i class="bi bi-egg-fried"></i></div>
                            <h4 className='title'><a href='https://www.google.com.br'>Encookado</a></h4>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sunt optio ullam fugit quo sit assumenda sapiente. Dolore quae aliquid est quisquam aperiam. Recusandae aspernatur, mollitia debitis consequuntur ea a?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore aliquam inventore iusto facilis consequatur fugit eligendi consectetur cumque omnis dolor, voluptatibus ipsum rem id quisquam, nisi repellat? Asperiores, libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis veniam sequi voluptates exercitationem ipsam debitis eaque, id optio. Eveniet autem quo unde, rerum deserunt dolorem necessitatibus fugiat provident sint.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}