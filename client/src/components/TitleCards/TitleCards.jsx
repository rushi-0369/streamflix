import "./TitleCards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?api_key=${API_KEY}&language=en-US&page=1`,
    )
      .then((res) => res.json())
      .then((data) => setApiData(data.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card-list">
        {apiData.map((card) => (
          <Link to={`/player/${card.id}`} className="card" key={card.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
            />

            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
