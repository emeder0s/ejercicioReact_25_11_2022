import logo from './logo.svg';
import './App.css';
import Cabeceras from './component/Cabeceras';
import PiePagina from './component/PiePagina';
import Formulario from './component/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabeceras titulo1="Título principal" titulo2="subtítulo" titulo3="Tercer título" ></Cabeceras>
        <Formulario></Formulario>
        <PiePagina email="thebridge@gmail.com" ciudad="Madrid" direccion="Paseo de Recoletos, 15" ></PiePagina>
      </header>
    </div>
  );
}

export default App;
