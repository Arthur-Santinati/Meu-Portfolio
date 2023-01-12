import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export const Header = () => {
    
    let itens = document.getElementsByClassName("nav-link")
    function selecionaPágina(event) {
        for (let i = 0; i < itens.length; i++) {
            itens[i].classList.remove("active")
        }
        event.target.classList.add("active")
    }


    return (
        <header id='header' className='d-flex align-items-center'>
            <div className='container d-flex align-items-center justify-content-between'>

                <div className='logo'>
                    <h1>Meu portfólio</h1>
                </div>

                <nav id='navbar' className='navbar'>
                    <ul>
                        <li><Link className='nav-link scrollto active' to='/' onClick={(event) => selecionaPágina(event)}>Home</Link></li>
                        <li><a className='nav-link scrollto' href='#about' onClick={(event) => selecionaPágina(event)}>Sobre mim</a></li>
                        <li className='dropdown'>
                            <a href='#about'>
                                <span className='nav-link scrollto'>Projetos</span> 
                                <i className='bi bi-chevron-down'></i>
                            </a>
                            <ul>
                                <li><a href='#about'>Tecer</a></li>
                                <li><a href='#about'>App de receitas</a></li>
                                <li><a href='#about'>Castroff</a></li>
                                <li><a href='#about'>Thinksus</a></li>
                                {/* <li className='dropdown'>
                                    <a href='#about'>
                                        <span>Projetos feitos com um time</span> 
                                        <i className='bi bi-chevron-right'></i>
                                    </a>

                                    <ul>
                                        <li><a href='#about'>LGPD</a></li>
                                        <li><a href='#about'>Cursos</a></li>
                                        <li><a href='#about'>Consultoria</a></li>
                                        <li><a href='#about'>Certificações</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li><a className='nav-link scrollto' href='#contact' onClick={(event) => selecionaPágina(event)}>Contato</a></li>
                    </ul>
                    <i className='bi bi-list mobile-nav-toggle'></i>
                </nav>
            </div>
        </header>
    )
}