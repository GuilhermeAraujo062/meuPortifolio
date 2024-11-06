import './Tecnologias.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Tecnologias = () => {
    return (
        <section className='tecnologias' id='tecnologias'>
            <h2>Tecnologias</h2>
            <div className='icones'>
                <div>
                    <FaHtml5 className='icon icon-html'/>
                    <p>HTML5</p>
                </div>
                
                <div>
                    <IoLogoCss3 className='icon icon-css'/>
                    <p>CSS3</p>
                </div>

                <div>
                    <IoLogoJavascript className='icon icon-js'/>
                    <p>JavaScript</p>
                </div>

                <div>
                    <FaReact className='icon'/>
                    <p>React</p>
                </div>

                <div>
                    <FaNodeJs className='icon icon-node'/>
                    <p>Nodejs</p>
                </div>
            </div>
        </section>
    )
}

export default Tecnologias;