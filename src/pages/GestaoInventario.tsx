import { Link } from "react-router-dom";

const GestaoInventario: React.FC = () => {
    return (
      <div className="container">
        <h1>Gestão de Inventário</h1>
        <p>Controle o estoque e receba alertas sobre níveis de inventário.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  };

export default GestaoInventario;