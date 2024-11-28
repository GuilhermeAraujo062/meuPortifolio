import "./MenuMobile.css";
import { IoMdClose } from "react-icons/io";

const MenuMobile = ({menuIsVisible, setMenuIsVisible}) => {
    return (
        <div className='menu-burger' id='menuBurger'>
            <div className="svg">
                <IoMdClose size={45}/>
            </div>

            <nav className="nav-mobile">
                <a href="#inicio" target='_self' rel='noreferrer'>Inicío</a>
                <a href="#sobre" target='_self' rel='noreferrer'>Sobre</a>
                <a href="#projetos" target='_self' rel='noreferrer'>Projetos</a>
                <a href="#tecnologias" target='_self' rel='noreferrer'>Tecnologias</a>
            </nav>
        </div>
    )
}

export default MenuMobile;