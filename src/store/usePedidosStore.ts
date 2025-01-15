import { create } from 'zustand';
import { IPedido, PedidoState } from '../types/PedidoTypes';

const usePedidosStore = create<PedidoState>((set) => ({
  pedidos: [],
  setPedidos: (pedidos: IPedido[]) => {
    set({
      pedidos: pedidos.map((pedido) => ({
        ...pedido,
        status: pedido.status as 'Concluído' | 'Entregue' | 'Em processo' | 'Cancelado', // Garantindo o tipo correto
      })),
    });
  },
  addPedido: (pedido: IPedido) => {
    set((state) => ({
      pedidos: [...state.pedidos, pedido],
    }));
  },
  updatePedido: (id: string, status: 'Concluído' | 'Entregue' | 'Em processo' | 'Cancelado') => {
    set((state) => ({
      pedidos: state.pedidos.map((pedido) =>
        pedido._id === id ? { ...pedido, status } : pedido
      ),
    }));
  },
  deletePedido: (id: string) => {
    set((state) => ({
      pedidos: state.pedidos.filter((pedido) => pedido._id !== id),
    }));
  },
}));

export default usePedidosStore;
