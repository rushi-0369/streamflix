import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);

 useEffect(() => {

  const API_KEY = "8b1c408c825f9150d178a7fe4445bff4";

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

      console.log("VIDEOS:", data);

      const trailer =
        data.results.find(v => v.type === "Trailer" && v.site === "YouTube") ||
        data.results.find(v => v.site === "YouTube");

      setApiData(trailer || null);

    })
    .catch(err => console.error(err));

}, [id]);

  return (
    <div className="player">

      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />

      {apiData ? (

        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="Trailer"
            allowFullScreen
          ></iframe>

          <div className="player-info">
            <p>{apiData.published_at?.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>

      ) : (

        <p style={{color:"white"}}>No trailer available</p>

      )}

    </div>
  );
};

export default Player;