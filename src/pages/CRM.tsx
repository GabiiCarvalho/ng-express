import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

interface IPedidos {
  Cliente: string,
  produto: string,
  status: 'Concluído' | 'Entregue' | 'Em processo' | 'Cancelado';
  dataCriacao: Date;
}

const CRM: React.FC = () => {

  const [pedidos, setPedidos] = useState<IPedidos[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pedidos')
    .then(response => {
      setPedidos(response.data);
      })
      .catch(error => {
        console.error('Erro ao busar pedidos:', error);
      });
  }, []);
  

  return (
    <div className="container">
      <h1>CRM - Gestão de Relacionamento com o Cliente</h1>
      <p>Acompanhe o histórico de clientes e feedbacks.</p>
      <ul>
        {pedidos.map((pedido, index) => (
          <li key={index}>
            <p><strong>Cliente:</strong> {pedido.Cliente} </p>
            <p><strong>Produto:</strong> {pedido.produto} </p>
            <p><strong>Status</strong> {pedido.status} </p>
            <p><strong>Data de Criação</strong> {new Date(pedido.dataCriacao).toLocaleString()} </p>
          </li>
        ))}
      </ul>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default CRM;