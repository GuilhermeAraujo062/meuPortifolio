import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Sobre from './componentes/Sobre';
import Projetos from './componentes/Projetos';
import Tecnologias from './componentes/Tecnologias';
import Footer from './componentes/Footer'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Sobre />
      <Projetos />
      <Tecnologias />
      <Footer />
    </div>
  );
}

export default App;


// --white:#ffffff;
// --black: #111111;
// --light-black: #1b1b1b;
// --light-gray: #414141;
// --blue: #00b7ff;
// --gray: #292929;

// --font-titulo: 'Kanit', sans-serif;
// --font-padrao: 'Open Sans', sans-serif;
// --font-logo: 'Macondo', cursive;