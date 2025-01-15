export interface IPedido {
  _id: string;
  Cliente: string;
  produto: string;
  status: 'Concluído' | 'Entregue' | 'Em processo' | 'Cancelado'; // status com valores restritos
  dataCriacao: Date;
}

export interface PedidoState {
  pedidos: IPedido[];
  setPedidos: (pedidos: IPedido[]) => void;
  addPedido: (pedido: IPedido) => void;
  updatePedido: (id: string, status: 'Concluído' | 'Entregue' | 'Em processo' | 'Cancelado') => void;
  deletePedido: (id: string) => void;
}