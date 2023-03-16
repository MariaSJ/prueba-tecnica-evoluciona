import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';
import Logo from '../images/logo.png';

const Header = () => {

    return (
        <header className='header'>
            <img className="header__logo" src={Logo} alt='Logo web' title='Logo'></img>
            <p className="header__subtitle">¡Entérate de los últimos estrenos y adelántanos tu opinión!</p>
        </header>
    );
}

export default Header;