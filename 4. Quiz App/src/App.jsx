import { useEffect, useState } from "react";
import { Wrapper } from "./component/Style/wrapper";
import Quiz from "./component/UI/quiz";
import { Button } from "./component/Style/button";
import { Footer } from "./component/Style/footer";
import { QuizCard } from "./component/Style/quizCard";
import data from "./component/Data/data";
import { LI } from "./component/Style/scoreBoard";


function App() {
  const [indexNum, setIndexNum] = useState(0);
  const [quizes, setQuizes] = useState([data[indexNum]]);
  const [result, setResult] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [isSelect, setIsSelect] = useState(false)


  useEffect(() => {
    setQuizes([data[indexNum]]);
    setIsSelect(false)
  }, [indexNum]);


  /** next Quize Button */
  const nextQuize = () => {
    if (isSelect && indexNum < data.length) {
      setIndexNum(indexNum + 1);
    }
  };

  /** select option Button */
  const selectOption = (value) => {
    const currentQuize = quizes[0];
    const { question, answer } = currentQuize;
    const isCorrect = answer === value;
  
  const newResult = {
    ...result,
    [indexNum]: {
      Question: question,
      Your_answer: value,
      Currect_answer: answer,
      isCurrect: isCorrect,
    },
  };
  
  setResult(newResult);
  setIsSelect(true);

    /** total right answer */
    const score = Object.values(newResult).filter((d) => d.isCurrect).length;
    setTotalScore(score);
  };

  return (
    <Wrapper>
      {/* display condition  */}
      {indexNum < data.length ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h2>Quiz APP</h2>
            <hr />
          </div>
          <QuizCard>
            {quizes.map((quiz, index) => (
              <Quiz
                key={indexNum}
                num={indexNum + 1}
                id={indexNum}
                name={`question-${index}`}
                question={quiz.question}
                option1={quiz.options.option1}
                option2={quiz.options.option2}
                option3={quiz.options.option3}
                option4={quiz.options.option4}
                selectOption={selectOption}
              />
            ))}
          </QuizCard>
          <Footer>
            <div>
              <span>
                Question {indexNum + 1} of {data.length}
              </span>
            </div>
            <div>
              <Button disabled={!isSelect} onClick={nextQuize}>Next...</Button>
            </div>
          </Footer>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>Score Board</h1>
            <h2>Total Score {totalScore} out of {data.length}</h2>
          </div>
          <hr />

          {Object.values(result).map((data, index) => (
           <ul key={index}>
             <LI><b>Q:</b> {data.Question} </LI>
             <LI><b>Your Ans:</b> {data.Your_answer}</LI>
             <LI><b>Ans:</b> {data.Currect_answer}</LI>
             <LI><b>Currect:</b> {data.isCurrect ? ' ✅ Yes' : ' ❌ No'}</LI>
             <hr />
           </ul>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default App;
