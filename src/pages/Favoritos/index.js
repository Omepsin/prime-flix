import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./styles.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista));
  }, []);

  function deleteMovie(id) {
    const filtroFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido dos favoritos", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className="favoritos">
      <h1>Filmes Favoritos</h1>

      {filmes.length === 0 && <span>Você não possui filmes salvos</span>}

      {filmes.map((filme) => {
        return (
          <div className="filmesFavoritos">
            <strong>{filme.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
              alt={filme.title}
            />

            <div className="buttonFavoritos">
              <Link to={`/filme/${filme.id}`}>Acessar</Link>

              <button onClick={() => deleteMovie(filme.id)}>Excluir</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
