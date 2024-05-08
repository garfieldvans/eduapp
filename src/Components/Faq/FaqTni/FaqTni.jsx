import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Faqtni = () => {
  const [faqData, setFaqData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchFaqtni = () => {
      fetch("https://api.edulink-indonesia.com/faqtni")
        .then((res) => res.json())
        .then((data) => {
          setFaqData(data);
          (data);
        });
    };
    fetchFaqtni();
  }, []);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <React.Fragment>
      <div className="faq-accordion">
        <h1 className="text-faq">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="garis-faq">
          <hr className="child-garis-faq" />
          <span className="icon-faq">
            <FontAwesomeIcon icon={faCircleQuestion} />
          </span>
          <hr className="child-garis-faq" />
        </div>
        {faqData.map((question, index) => (
          <div className="parent-all-accordion">
            <div
              key={index}
              className={`question ${
                selectedQuestion === index ? "active" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <p className="faq-pertanyaan">{question.pertanyaan}</p>
              <span className="material-symbols-outlined">
                {selectedQuestion === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`answer ${
                selectedQuestion === index ? "open" : "closed"
              }`}
            >
              {/* <hr className="line-faq" /> */}
              <p className="faq-jawaban">{question.jawaban}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Faqtni;
