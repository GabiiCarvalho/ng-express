import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "../App.css";

const Home: React.FC = () => {
  const modules = [
    {
      title: 'Gestão de Pedidos',
      items: [
        { name: 'Rastreamento de Pedidos', link: '/rastreamento-pedidos' },
        { name: 'Otimização de Rotas', link: '/otimizacao-rotas' },
        { name: 'Solicitação de Entregas', link: '/GestaoPedidos'}
      ]
    },
    {
      title: 'Despacho de Motoboys',
      items: [
        { name: 'Status em Tempo Real', link: '/status-tempo-real' },
        { name: 'Atribuição de Tarefas', link: '/atribuicao-tarefas' },
        { name: 'Reatribuição de Emergência', link: '/reatribuicao-emergencia' }
      ]
    },
    {
      title: 'Gestão de Inventário',
      items: [
        { name: 'Controle de Estoque', link: '/controle-estoque' },
        { name: 'Gestão de Suprimentos', link: '/gestao-suprimentos' },
        { name: 'Alertas de Inventário', link: '/alertas-inventario' }
      ]
    },
    {
      title: 'CRM (Gestão de Relacionamento com o Cliente)',
      items: [
        { name: 'Feedback de Clientes', link: '/feedback-clientes' },
        { name: 'Histórico de Pedidos', link: '/historico-pedidos' },
        { name: 'Programas de Fidelidade', link: '/programas-fidelidade' }
      ]
    },
    {
      title: 'Faturamento e Emissão de Notas',
      items: [
        { name: 'Geração de Faturas', link: '/geracao-faturas' },
        { name: 'Rastreamento de Pagamentos', link: '/rastreamento-pagamentos' },
        { name: 'Cálculo de Impostos', link: '/calculo-impostos' }
      ]
    },
    {
      title: 'Relatórios e Análises',
      items: [
        { name: 'Relatórios de Desempenho', link: '/relatorios-desempenho' },
        { name: 'Análise de Tempo de Entrega', link: '/analise-tempo-entrega' },
        { name: 'Rastreamento de Receita', link: '/rastreamento-receita' }
      ]
    }
  ];

  const [activeModule, setActiveModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Sistema ERP para Empresa de Entregas por Motoboy</h1>
      <p>Conheça os módulos principais do ERP e como cada um contribui para otimizar o fluxo de trabalho de uma empresa de entregas.</p>

      <nav className="navbar">
        {modules.map((module, index) => (
          <div className="module" key={index}>
            <div className="module-header" onClick={() => toggleModule(index)}>
              <h2>{module.title}</h2>
              <span className={`arrow ${activeModule === index ? 'open' : ''}`}>↓</span>
            </div>
            {activeModule === index && (
              <ul className="module-items">
                {module.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Home;
