import './Inicio.css';

const Inicio = () => {
    return (
        <section className='inicio'>
            <div className='titulo'>
                <h1>Olá, eu sou<br/> Guilherme Araujo<br/>Desenvolvedor Front-End</h1>
                <button>Github</button>
                <button>Linkedin</button>
            </div>

            <div className='img'>
                <img src="./imagens/person-picture.png"></img>
            </div>
            
        </section>
    );
}


export default Inicio;