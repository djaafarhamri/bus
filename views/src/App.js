import './App.css';
import { Routes, Route } from 'react-router'
import Nav from './shared/Nav'
import Home from './pages/Home/Home';
import Live from './pages/Live/Live';
import AddBus from './pages/Add-Bus/AddBus';
import Login from './pages/LoginPage/Login';
import Personne from './pages/Personne/Personne';
import Colis from './pages/Colis/Colis';

function App() {
  return (
    <div className="flex">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/add-bus" element={<AddBus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personne" element={<Personne />} />
        <Route path="/colis" element={<Colis />} />
      </Routes>
    </div>
  );
}

export default App;
