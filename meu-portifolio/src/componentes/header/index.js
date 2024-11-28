import './Header.css';
import { TbMenu2 } from "react-icons/tb";

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <p>&lt;ga/&gt;</p>
            </div>

            <div className='burger'><TbMenu2 size={45}/></div>
            <nav>
                <a href="#inicio" target='_self' rel='noreferrer'>Inicío</a>
                <a href="#sobre" target='_self' rel='noreferrer'>Sobre</a>
                <a href="#projetos" target='_self' rel='noreferrer'>Projetos</a>
                <a href="#tecnologias" target='_self' rel='noreferrer'>Tecnologias</a>
            </nav>
        </header>
    )
}

export default Header;