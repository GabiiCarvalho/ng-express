import React, { useEffect, useState } from 'react';
import { getPedidos, createPedido, updatePedido, deletePedido } from '../services/pedidoService';

const Pedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<any[]>([]);
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [status, setStatus] = useState('Em processo');

  // Carregar pedidos ao iniciar
  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const pedidosData = await getPedidos();
        setPedidos(pedidosData);
      } catch (error) {
        console.error('Erro ao buscar pedidos', error);
      }
    };
    fetchPedidos();
  }, []);

  // Criar novo pedido
  const handleCreatePedido = async () => {
    const novoPedido = { Cliente: cliente, produto, status };
    try {
      const pedidoCriado = await createPedido(novoPedido);
      setPedidos((prevPedidos) => [...prevPedidos, pedidoCriado]);
    } catch (error) {
      console.error('Erro ao criar pedido', error);
    }
  };

  // Atualizar o status do pedido
  const handleUpdatePedido = async (id: string, newStatus: string) => {
    try {
      const pedidoAtualizado = await updatePedido(id, newStatus);
      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido._id === id ? { ...pedido, status: pedidoAtualizado.status } : pedido
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar pedido', error);
    }
  };

  // Excluir um pedido
  const handleDeletePedido = async (id: string) => {
    try {
      await deletePedido(id);
      setPedidos((prevPedidos) => prevPedidos.filter((pedido) => pedido._id !== id));
    } catch (error) {
      console.error('Erro ao excluir pedido', error);
    }
  };

  return (
    <div>
      <h1>Pedidos</h1>

      {/* Formulário para adicionar novo pedido */}
      <div>
        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Em processo">Em processo</option>
          <option value="Concluído">Concluído</option>
          <option value="Entregue">Entregue</option>
          <option value="Cancelado">Cancelado</option>
        </select>
        <button onClick={handleCreatePedido}>Criar Pedido</button>
      </div>

      {/* Lista de pedidos */}
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido._id}>
            {pedido.Cliente} - {pedido.produto} - {pedido.status}
            <button onClick={() => handleUpdatePedido(pedido._id, 'Concluído')}>Concluir</button>
            <button onClick={() => handleDeletePedido(pedido._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pedidos;
