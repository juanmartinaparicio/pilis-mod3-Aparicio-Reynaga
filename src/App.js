import './App.css';
import UbicacionesList from './components/UbicacionesList';
import UbicacionesForm from './components/UbicacionesForm';
import ClimaContext from './context/ClimaContext';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ClimaContext>
        <Navbar />
        <UbicacionesForm />
        <UbicacionesList />
      </ClimaContext>
    </div>
  );

}

export default App;
