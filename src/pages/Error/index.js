import React from "react";
import "./error.css";
import plugImage from "../../assets/rotated-plug.png";
import CrossImage from "../../assets/cross.svg";
import CircleImage from "../../assets/circle.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error-page">
      <section className="wire-section">
        <img src={plugImage} alt="Plug" />
      </section>

      <section className="error-text-section">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          we’re sorry. the page you requested could no be found Please go back
          to the home page
        </p>
        <Link to={"/"}>
          <button>Go Home</button>
        </Link>

        <img className="cross-img" image-size="small" src={CrossImage} alt="" />
        <img
          className="cross-img"
          image-size="medium"
          src={CrossImage}
          alt=""
        />
        <img className="cross-img" image-size="large" src={CrossImage} alt="" />

        <img
          className="circle-img"
          image-size="small"
          src={CircleImage}
          alt=""
        />
        <img
          className="circle-img"
          image-size="medium"
          src={CircleImage}
          alt=""
        />
        <img
          className="circle-img"
          image-size="large"
          src={CircleImage}
          alt=""
        />
      </section>
    </main>
  );
};

export default Error;
