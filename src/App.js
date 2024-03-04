import logo from './logo.svg';
import './App.css';
import MiComponente from './componente/MiComponente';
import SegundoComponente from './componente/SegundoComponente';
import TercerComponente from './componente/TercerComponente';
import OtroComponente from './componente/OtroComponente';


function App() {
  const ficha_medica = {
    altura: "180 cm",
    tipo_de_sangre: "A+",
    estado: "Bueno",
    alergia: "Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <OtroComponente />
        <hr />
        <TercerComponente
          nombre="Matt"
          apellido="Shiro"
          ficha={ficha_medica} />
        <hr />
        <SegundoComponente />
        <hr />
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
