import './App.css';
import { Routes, Route } from 'react-router'
import Nav from './shared/Nav'
import Camion from './pages/Camion/Camion';
import Bus from './pages/Bus/Bus';
import AddBus from './pages/Add-Bus/AddBus';
import Login from './pages/LoginPage/Login';
import Ticket from './pages/Ticket/Ticket';
import Historique from './pages/Historique/Historique';

function App() {
  return (
    <div className="flex">
      <Nav />
      <Routes>
        <Route path="/" element={<Camion />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/add-bus" element={<AddBus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </div>
  );
}

export default App;
