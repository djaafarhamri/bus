import './App.css';
import { Routes, Route } from 'react-router'
import Nav from './shared/Nav'
import Home from './pages/Home/Home';
import Live from './pages/Live/Live';
import AddBus from './pages/Add-Bus/AddBus';

function App() {
  return (
    <div className="flex">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/add-bus" element={<AddBus />} />
      </Routes>
    </div>
  );
}

export default App;
