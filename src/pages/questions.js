import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";

const Questions = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState(null);

  const allQuestions = [
    {
      que: "How often do you feel the urge to stay alone recently?",
      a: "Very often",
      b: "i don't feel the urge to stay alone at all",
    },
    {
      que: "How often do you feel lonely?",
      a: "I feel lonely too frequently",
      b: "i don't feel lonely at all",
    },
    {
      que: "What change have you noticed in your speech pattern lately?",
      a: "I now find it hard to make a complete sentence without stuttering",
      b: "nothing changed",
    },
    {
      que: "What have you noticed in your eating pattern?",
      a: "I lose appetite too often unlike before",
      b: "My eating pattern depends on my mood",
    },
    {
      que: "How often is do you get angry compared to before?",
      a: "I get angry too quickly",
      b: " Nothing changed",
    },
    {
      que: "How often do you feel tired or having little energy compared how you normally feel?",
      a: "I get tired and lose energy every time",
      b: "I don't lose energy very often",
    },

    {
      que: "How will you define your life at the moment?",
      a: "My life feels empty and hopeless",
      b: "My life feels great, just a bit tiring",
    },
    {
      que: "Has it been hard to concentrate on things you'd normally not find hard to concentrate on?",
      a: "Yes, i lose focus and get lost in thought now",
      b: "I am still able to concentrate",
    },
  ];

  const handleNext = () => {
    if (!selected) {
      return;
    }
    if (current < 8) {
      setSelected(null);
      setCurrent(current + 1);
    }
  };

  const handleSubmit = () => {
    navigate("/report");
  };
  const handlePrev = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };
  return (
    <Layout>
      <div className="questionWrap">
        <p style={{ textAlign: "right" }}>
          {current} / {allQuestions.length}
        </p>
        {allQuestions.map(
          (item, idx) =>
            idx + 1 === current && (
              <div>
                <p className="question">
                  {idx + 1}. {item.que}
                </p>
                <button
                  className={`options ${selected === "a" && "active"}`}
                  onClick={() => setSelected("a")}
                >
                  {item.a}
                </button>
                <button
                  className={`options ${selected === "b" && "active"}`}
                  onClick={() => setSelected("b")}
                >
                  {item.b}
                </button>
              </div>
            )
        )}

        <div className="controls">
          <button onClick={handlePrev}>Prev</button>

          {current === allQuestions.length ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Questions;
