import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default function Filme() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "c67a479bcf24ef8c1dfb3954740e88ed",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setDetails(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("Componente desmontado");
    };
  }, [id, navigate]);

  if (loading) {
    return <h2 className="loading"> Carregando detalhes...</h2>;
  }

  return (
    <div className="filme-info">
      <h1>{details.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        alt={details.title}
      />
      <h3>Sinopse</h3>
      <span>
        {details.overview || "Não foi possivel encontrar a sinopse deste filme"}
      </span>

      <strong>Avaliação: {details.vote_average} /10</strong>

      <div className="buttons">
        <button>Salvar</button>
        <a
          target="blank"
          rel="external"
          href={`https://youtube.com/results?search_query=${details.title} Trailer`}
          className="link"
        >
          Trailer
        </a>
      </div>
    </div>
  );
}
