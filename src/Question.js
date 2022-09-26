import React from "react";
import { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <div className="first-control">
        <h4>{title}</h4>
        <button
          type="button"
          className="btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "-" : "+"}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;
