import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <p>&lt;ga/&gt;</p>
            </div>

            <div className='nav'>
                <ul>
                    <li><a href="#inicio" target='_self' rel='noreferrer'>Inicío</a></li>
                    <li><a href="#sobre" target='_self' rel='noreferrer'>Sobre</a></li>
                    <li><a href="#projetos" target='_self' rel='noreferrer'>Projetos</a></li>
                    <li><a href="#tecnologias" target='_self' rel='noreferrer'>Tecnologias</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;