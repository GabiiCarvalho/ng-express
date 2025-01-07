import { Link } from "react-router-dom";
import React from "react";


const CRM: React.FC = () => {
  return (
    <div className="container">
      <h1>CRM - Gestão de Relacionamento com o Cliente</h1>
      <p>Acompanhe o histórico de clientes e feedbacks.</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default CRM;