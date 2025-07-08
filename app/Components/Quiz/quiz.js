"use client";
import classes from "./Quiz.module.css";
import { useState, useEffect } from "react";
import Result from "../Result/Result";
import QuizTitle from "../Title/QuizTitle";
import Options from "../Options/Options";
import ProgressBar from "react-bootstrap/ProgressBar";

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const QuizClient = ({ category, questions }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const prepared = questions.map((q) => ({
      ...q,
      shuffledOptions: shuffleArray(q.array),
    }));
    setQuizData(prepared);
  }, [questions]);

  const currentQuestion = quizData[currentIndex];
  const progress = Math.round((currentIndex / quizData.length) * 100);

  const handleAnswer = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setFeedback(
      isCorrect
        ? "✅ Correct!"
        : `❌ Wrong! Correct answer: ${currentQuestion.answer}`
    );

    setTimeout(() => {
      setSelectedOption(null);
      setFeedback("");
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  useEffect(() => {
    if (currentIndex >= questions.length && questions.length > 0) {
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();

      const newEntry = {
        score,
        time,
        date,
        category,
      };

      let storedData = [];
      try {
        const prevData = localStorage.getItem("my_Quiz_Data");
        if (prevData) {
          storedData = JSON.parse(prevData);
          if (!Array.isArray(storedData)) storedData = [];
        }
      } catch (e) {
        console.error("Failed to parse quiz data from localStorage:", e);
      }

      storedData.push(newEntry);
      localStorage.setItem("my_Quiz_Data", JSON.stringify(storedData));
    }
  }, [currentIndex, questions.length, score]);

  if (quizData.length === 0) return <div>Loading...</div>;

  if (currentIndex >= quizData.length) {
    const correct = Math.round((score / quizData.length) * 100);
    const wrong = 100 - correct;
    return <Result correct={correct} wrong={wrong} score={score} />;
  }

  return (
    <div>
      <div style={{ padding: "2rem" }}>
        <div className={classes.main_head}>
          <div>
            <QuizTitle qtitle={category} />
          </div>
          <h2 className={classes.lvl}>
            <span  style={{ color: "darkgray" }}>Level: </span>
            <span style={{ color: "#fcd12a", textTransform: "capitalize" }}>
              {currentQuestion.difficulty}
            </span>
          </h2>
        </div>

        <h3 className={classes.questions}>
          Q{currentIndex + 1}: {currentQuestion.question}
        </h3>

        <div
          className="mx-3"
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(2,50%)",
            gap: "2rem",
          }}
        >
          {currentQuestion.shuffledOptions.map((option, idx) => (
            <div key={idx} onClick={() => handleAnswer(option)}>
              <Options
                option={option}
                selectedOption={selectedOption}
                correctAnswer={currentQuestion.answer}
              >
                {option}
              </Options>
            </div>
          ))}
        </div>

        {/* {feedback && (
          <div style={{ marginTop: "1rem", fontWeight: "bold" }}>{feedback}</div>
        )} */}


      </div>

      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          zIndex: 9999,
        }}
      >
        <ProgressBar
          animated
          now={progress}
          variant="warning"
          label={`${progress}%`}
          style={{ height: "20px", fontWeight: "bold" }}
        />
      </div>

    </div>
  );
};

export default QuizClient;
