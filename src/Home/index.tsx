import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaGoogle } from 'react-icons/fa';
import "../App.css";

const Home: React.FC = () => {
  const modules = [
    {
      title: 'Cliente',
      items: [
        { name: 'Login', link: '/login' },
        { name: 'Cadastro', link: '/cadastro' },
      ]
    },
    {
      title: 'Gestão de Pedidos',
      items: [
        { name: 'Rastreamento de Pedidos', link: '/rastreamento-pedidos' },
        { name: 'Otimização de Rotas', link: '/otimizacao-rotas' },
        { name: 'Solicitação de Entregas', link: '/GestaoPedidos' }
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
      <h1>N&G EXPRESS</h1>
      <p>Do seu clique à sua porta, tranquilidade e rapidez na palma da sua mão</p>  

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

      <footer className="footer">
        <div className="footer-description">
          <p><strong>N&G EXPRESS</strong> - Soluções completas para logística e entrega rápida.</p>
          <p>CNPJ: 24.723.159/0001-00</p>
          <p><FaPhoneAlt /> (47) 9 9912-3260 | <FaEnvelope /> comercial.ngexpress@gmail.com</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/negexpressteleentrega?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/ng.express_/profilecard/?igsh=MTB6NnJ0N3AxZXc4Zw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.google.com.br/search?q=n%26g&sca_esv=970bf9b28f8ad5fb&sxsrf=ADLYWILJ1wJI5XcWGlEmK6dID2IyylZd-A%3A1736527046386&source=hp&ei=xkyBZ_6kFejX5OUPuqumwAc&iflsig=AL9hbdgAAAAAZ4Fa1sXvIEV0jZQv8B1-GPDlIhVJYK6t&ved=0ahUKEwj-n_aty-uKAxXoK7kGHbqVCXgQ4dUDCBc&uact=5&oq=n%26g&gs_lp=Egdnd3Mtd2l6IgNuJmcyBBAjGCcyBRAAGIAEMgcQABiABBgKMgsQLhiABBjHARivATINEC4YgAQYxwEYChivATIKEAAYgAQYsQMYCjINEC4YgAQYxwEYChivATIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkj1CVAAWK4EcAB4AJABAJgB6AGgAYoEqgEFMC4yLjG4AQPIAQD4AQGYAgOgAqcEwgIKECMYgAQYJxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICDhAuGIAEGLEDGNEDGMcBwgILEAAYgAQYsQMYgwGYAwCSBwUwLjIuMaAHgyY&sclient=gws-wiz" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
