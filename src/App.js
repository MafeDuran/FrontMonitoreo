import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Router también
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {
  return (
    <Router> {/* Envuelve Routes con Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        {/*<Route path="/inicio" element={<Inicio />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
