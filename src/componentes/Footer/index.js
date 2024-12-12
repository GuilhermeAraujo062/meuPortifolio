import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contatos'>
                <h3>Entre em contato comigo:</h3>
                <a href='https://www.linkedin.com/in/guilherme62araujo/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
                <a href='https://criarmeulink.com.br/u/1730979566' target='_blank' rel='noreferrer'><MdEmail /></a>
                <a href='https://wa.me/62993190052' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
            </div>

            <div className='creditos'>
                <a href="https://storyset.com/work" target="_blank" rel="noreferrer">Work illustrations by Storyset</a>
            </div>
        </footer>
    )
}

export default Footer;