import { useEffect } from "react";
import {Container} from "./style";
import { IoMdClose } from "react-icons/io";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>

            <IoMdClose size={45} onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <a href="#inicio" target='_self' rel='noreferrer'>Inicío</a>
                <a href="#sobre" target='_self' rel='noreferrer'>Sobre</a>
                <a href="#projetos" target='_self' rel='noreferrer'>Projetos</a>
                <a href="#tecnologias" target='_self' rel='noreferrer'>Tecnologias</a>
            </nav>
        </Container>
    )
}

export default MenuMobile;