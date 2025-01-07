import React from "react";
import { Link } from "react-router-dom";

const Relatorios: React.FC = () => {
    return (
      <div className="container">
        <h1>Relatórios e Análises</h1>
        <p>Gere relatórios de desempenho e analise métricas importantes.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  };

export default Relatorios;