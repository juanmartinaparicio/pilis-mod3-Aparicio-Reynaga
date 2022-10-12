import logo from './logo.svg';
import './App.css';
import UbicacionesList from './components/UbicacionesList';
import UbicacionesForm from './components/UbicacionesForm';
import ClimaContext from './context/ClimaContext';

function App() {
  return (
    <div className="App">
      <ClimaContext>
        <UbicacionesList />
      </ClimaContext>
    </div>

  );

}

export default App;
