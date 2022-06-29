import './App.css';
import { Routes, Route } from 'react-router'
import Nav from './shared/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
