import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react'
import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';
import Logo from '../images/logo.png';

const Header = () => {

    // Animations GSAP

    useLayoutEffect(() => {
        const logo = document.querySelector('.header__logo'); 
        gsap.from(logo, { opacity: 0, y: 50, duration: 2, ease: "elastic.out(1, 0.3)" });
        const text = document.querySelector('.header__subtitle');
        gsap.from(text, { opacity: 0, y: 50, duration: 2 });
    }, []);

    return (
        <header className='header'>
            <img className="header__logo" src={Logo} alt='Logo web' title='Logo'></img>
            <p className="header__subtitle">¡Entérate de los últimos estrenos y adelántanos tu opinión!</p>
        </header>
    );
}

export default Header;