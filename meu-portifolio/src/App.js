import { useState } from 'react';
import MenuMobile from './componentes/MenuMobile';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Sobre from './componentes/Sobre';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer'
import TecnologiasSwiper from './componentes/TecnologiasSwiper';

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  
  return (
    <div className="App">
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <Inicio />
      <Sobre />
      <Projetos />
      <TecnologiasSwiper />
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