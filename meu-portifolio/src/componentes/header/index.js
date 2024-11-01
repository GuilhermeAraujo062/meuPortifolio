import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <h1>&lt;ga/&gt;</h1>
            </div>

            <div className='nav'>
                <ul>
                    <li>Inicío</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Habilidades</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;