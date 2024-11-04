import './Sobre.css';

const Sobre = () => {
    return (
        <section className='sobre' id='sobre'>
            <div className='img'>
                <img src='./imagens/eu-sp.png' alt='eu em south park'></img>
            </div>

            <div className='sobre-mim'>
                <h2>Sobre mim</h2>
                <p>Oi, meu nome é Guilherme Araújo e sou estudante de programação. Estou sempre em busca de novas oportunidades para aprender e crescer na área. Tenho uma paixão por resolver problemas e desenvolver soluções criativas através da tecnologia.</p>
                <p>Estou animado para me conectar com projetos desafiadores e contribuir com meu conhecimento, enquanto continuo a aprimorar minhas habilidades.</p>
            </div>
        </section>
    )
}

export default Sobre;