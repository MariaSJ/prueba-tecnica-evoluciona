import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';

const Header = (props) => {

    return (
        <header className='header'>
            <h1 className="header__title">Movies Web</h1>
        </header>
    );
}

export default Header;