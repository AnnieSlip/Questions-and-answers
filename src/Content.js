import React from "react";
import Question from "./Question";
import Data from "./Data";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState(Data);
  return (
    <section className="form-content">
      <div className="description">
        <p>Questions and answers about login</p>
      </div>

      <div className="questions-container">
        {data.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </div>
    </section>
  );
};

export default Form;
