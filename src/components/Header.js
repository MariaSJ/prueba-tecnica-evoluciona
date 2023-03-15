import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';

const Header = (props) => {

    return (
        <header className='header'>
            <h1 className="header__title">Movies Web</h1>
            <p className="header__subtitle">Check out the latest films released and let us know your review if you've already seen them!</p>
        </header>
    );
}

export default Header;