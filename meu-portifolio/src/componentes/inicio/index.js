import './Inicio.css';

const Inicio = () => {
    return (
        <section className='inicio'>
            <div className='titulo'>
                <h1>Olá, eu sou<br/> <span>Guilherme Araujo</span><br/>Desenvolvedor Front-End</h1>
                <div className='btn'>
                    <a href="https://github.com/GuilhermeAraujo062" target='_blank'>Github</a>
                    <a href="https://www.linkedin.com/in/guilherme62araujo/" target='_blank'>Linkedin</a>
                </div>
            </div>

            <div className='img'>
                <img src="./imagens/person-picture.png" alt='person'></img>
            </div>
            
        </section>
    );
}


export default Inicio;