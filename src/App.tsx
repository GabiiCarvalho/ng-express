import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GestaoPedidos from './pages/GestaoPedidos';
import DespachoMotoboys from './pages/DespachoMotoboys';
import GestaoInventario from './pages/GestaoInventario';
import CRM from './pages/CRM';
import Faturamento from './pages/Faturamento';
import Relatorios from './pages/Relatorios';
import Home from './Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GestaoPedidos" element={<GestaoPedidos />} />
      <Route path="/DespachoMotoboys" element={<DespachoMotoboys />} />
      <Route path="/Inventario" element={<GestaoInventario />} />
      <Route path="/CRM" element={<CRM />} />
      <Route path="/Faturamento" element={<Faturamento />} />
      <Route path="/Relatorios" element={<Relatorios />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
};

export default App;
