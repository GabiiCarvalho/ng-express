import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pedidos'; // URL do seu backend

// Função para pegar todos os pedidos
export const getPedidos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    throw error;
  }
};

// Função para criar um novo pedido
export const createPedido = async (pedido: { Cliente: string; produto: string; status: string }) => {
  try {
    const response = await axios.post(API_URL, pedido);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    throw error;
  }
};

// Função para atualizar o status de um pedido
export const updatePedido = async (id: string, status: string) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    throw error;
  }
};

// Função para excluir um pedido
export const deletePedido = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao excluir pedido:', error);
    throw error;
  }
};
