import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Hi, I'm Abner.</h1>
      <p className="home__paragraph">
        I am a Full Stack developer from Caguas, Puerto Rico. I am currently
        finishing my Bachelors degree in Computer Science at the University of
        Rochester. When not working on projects, I enjoy teaching myself new
        technologies.
      </p>
      <p className="home__paragraph">
        My most recent project is Puerto Rico eRacing Club’s website, where I
        was able to combine my passion for motorsports and development. It
        features a <i>Race Strategy Calculator</i> that, given telemetry on the
        different tyres available, it returns the optimal tyre strategy for a
        given race.
      </p>
    </div>
  );
}

export default Home;
