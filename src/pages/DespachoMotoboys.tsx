import { Link } from "react-router-dom";

const DespachoMotoboys: React.FC = () => {
    return (
      <div className="container">
        <h1>Despacho de Motoboys</h1>
        <p>Gerencie o despacho e a atribuição de tarefas em tempo real.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  };

export default DespachoMotoboys;