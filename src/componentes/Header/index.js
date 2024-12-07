import './Header.css';
import { TbMenu2 } from "react-icons/tb";

const Header = ({ setMenuIsVisible }) => {
    return (
        <header className='header'>
            <div className='logo'>
                <p>&lt;ga/&gt;</p>
            </div>

            <nav>
                <a href="#inicio" target='_self' rel='noreferrer'>Inicío</a>
                <a href="#projetos" target='_self' rel='noreferrer'>Projetos</a>
                <a href="#sobre" target='_self' rel='noreferrer'>Sobre</a>
                <a href="#tecnologias" target='_self' rel='noreferrer'>Tecnologias</a>
            </nav>

            <TbMenu2 className='mobile' size={45} onClick={() => setMenuIsVisible(true)}/>
        </header>
    )
}

export default Header;