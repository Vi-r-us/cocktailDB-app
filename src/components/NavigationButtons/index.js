import React from "react";
import "./navigationButton.css";

export const BackButton = () => {
  return (
    <div className="nav-btn flex" direction="row">
      <div className="box">
        <span class="left-arrow"></span>
      </div>
      <div className="text">go back</div>
    </div>
  );
};
