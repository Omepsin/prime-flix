import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "c67a479bcf24ef8c1dfb3954740e88ed",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return <h2 className="loading"> Carregando filmes...</h2>;
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
