import './Projetos.css'

const Projetos = () => {
    return (
        <section className='projetos' id='projetos'>
            <h2>Projetos</h2>

            <div className='projetos-container'>
                <div>
                    <img src='../imagens/easybank.jpg' alt='imagem do projeto'></img>
                    <p>Easybank</p>
                    <p>Tecnologias usadas no projeto: HTML, CSS, JavaScript</p>
                    <div className='btn'>
                        <a href="https://guilhermearaujo062.github.io/EasyBank/" target='_blank' rel='noreferrer'>Visualizar</a>
                        <a href="https://github.com/GuilhermeAraujo062/EasyBank" target='_blank' rel='noreferrer'>Repositório</a>
                    </div>
                </div>

                <div className='projeto'>
                    <div>
                        <img src='../imagens/Grey.png' alt='imagem do projeto'></img>
                        <p>Em breve</p>
                        <p>Tecnologias usadas no projeto:</p>
                        <div className='btn'>
                            <a href="www.google" target='_blank' rel='noreferrer'>Visualizar</a>
                            <a href="www.google.com" target='_blank' rel='noreferrer'>Repositório</a>
                        </div>
                    </div>
                </div>

                <div className='projeto'>
                    <div>
                        <img src='../imagens/Grey.png' alt='imagem do projeto'></img>
                        <p>Em breve</p>
                        <p>Tecnologias usadas no projeto:</p>
                        <div className='btn'>
                            <a href="www.google" target='_blank' rel='noreferrer'>Visualizar</a>
                            <a href="www.google.com" target='_blank' rel='noreferrer'>Repositório</a>
                        </div>
                    </div>
                </div>

                <div className='projeto'>
                    <div>
                        <img src='../imagens/Grey.png' alt='imagem do projeto'></img>
                        <p>Em breve</p>
                        <p>Tecnologias usadas no projeto:</p>
                        <div className='btn'>
                            <a href="www.google" target='_blank' rel='noreferrer'>Visualizar</a>
                            <a href="www.google.com" target='_blank' rel='noreferrer'>Repositório</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projetos;