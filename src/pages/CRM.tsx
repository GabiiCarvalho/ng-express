import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import usePedidosStore from "../store/usePedidosStore";
import { IPedido } from "../types/PedidoTypes";

const CRM: React.FC = () => {
  // Obtém os pedidos e a função setPedidos da store
  const { pedidos, setPedidos } = usePedidosStore((state) => ({
    pedidos: state.pedidos,
    setPedidos: state.setPedidos,
  }));

  useEffect(() => {
    // Requisição para obter os pedidos da API
    const fetchPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/pedidos");
        // Verifica se a resposta é um array antes de atualizar o estado
        if (Array.isArray(response.data)) {
          setPedidos(response.data);
        } else {
          console.error("A resposta da API não é um array:", response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchPedidos();
  }, [setPedidos]);

  return (
    <div className="container">
      <h1>CRM - Gestão de Relacionamento com o Cliente</h1>
      <p>Acompanhe o histórico de clientes e feedbacks.</p>
      <ul>
        {pedidos.map((pedido: IPedido, index: number) => (
          <li key={index}>
            <p>
              <strong>Cliente:</strong> {pedido.Cliente}{" "}
            </p>
            <p>
              <strong>Produto:</strong> {pedido.produto}{" "}
            </p>
            <p>
              <strong>Status:</strong> {pedido.status}{" "}
            </p>
            <p>
              <strong>Data de Criação:</strong>{" "}
              {new Date(pedido.dataCriacao).toLocaleString()}{" "}
            </p>
          </li>
        ))}
      </ul>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default CRM;
