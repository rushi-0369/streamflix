import React, { useRef } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const tvshowsRef = useRef(null);
  const moviesRef = useRef(null);
  const newpopRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home">
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToTvShows={() => scrollToSection(tvshowsRef)}
        scrollToMovies={() => scrollToSection(moviesRef)}
        scrollToNew={() => scrollToSection(newpopRef)}
      />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            In 1981 Gotham City, a struggling, mentally ill comic battles to be
            seen. His life takes a dark, gut-wrenching turn after he lashes back
            at attackers.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <div ref={homeRef}>
            <TitleCards category={"popular"} />
          </div>
          <div className="more-cards">
            <div ref={homeRef}>
              <TitleCards title={"Now Playing"} category={"now_playing"} />
            </div>

            <div ref={tvshowsRef}>
              <TitleCards title={"Blockbuster"} category={"popular"} />
            </div>

            <div ref={moviesRef}>
              <TitleCards title={"Top Rated"} category={"top_rated"} />
            </div>

            <div ref={newpopRef}>
              <TitleCards title={"Upcoming"} category={"upcoming"} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
