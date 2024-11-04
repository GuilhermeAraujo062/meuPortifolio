import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <p>&lt;ga/&gt;</p>
            </div>

            <div className='nav'>
                <ul>
                    <li><a href="#inicio"  target='_self'>Inicío</a></li>
                    <li><a href="#sobre" target='_self'>Sobre</a></li>
                    <li><a href="#" target='_self'>Projetos</a></li>
                    <li><a href="#" target='_self'>Habilidades</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;