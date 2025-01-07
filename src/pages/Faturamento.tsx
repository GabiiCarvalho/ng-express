import React from "react";
import { Link } from "react-router-dom";

const Faturamento: React.FC = () => {
  return (
    <div className="container">
      <h1>Faturamento e Emissão de Notas</h1>
      <p>Gerencie a emissão de faturas e o rastreamento de pagamentos.</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Faturamento;