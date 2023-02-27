import { Link } from "react-router-dom";
import "./erro.css";

export default function Erro() {
  return (
    <div className="Erro">
      <h1>ERROR 404</h1>
      <h2>Essa página não existe em nosso site!</h2>
      <Link to="/">Página inicial</Link>
    </div>
  );
}
