import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Hi, I'm Abner.</h1>
      <p className="home__paragraph">
        I am a Full Stack developer from Caguas, Puerto Rico, currently
        finishing my Bachelors degree in Computer Science at the University of
        Rochester. I am passionate about automation, Machine Learning, finance,
        motorsports and fitness. In my free time, I enjoy listening to my
        favorite podcasts and teching myself new technologies.
      </p>
      <p className="home__paragraph">
        My most recent project is Puerto Rico eRacing Club’s website, where I
        was able to combine my passion for motorsports and development. It
        features a <i>Race Strategy Calculator</i> that, given telemetry on the
        different tires available, it returns the optimal tire strategy for a
        given race.
      </p>
      <div className="home__images">
        <div className="images__container">
          <img
            className="imagesContainer__image"
            src={require("../../assets/natural_habitat.jpg")}
            alt="Abner Peña Natural Habitat"
          />
          <h2 className="imagesContainer__caption">Me in my natural habitat</h2>
        </div>
        <div className="images__container">
          <img
            className="imagesContainer__image"
            src={require("../../assets/second_home.jpg")}
            alt="Abner Peña Second Home"
          />
          <h2 className="imagesContainer__caption">My second home</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
