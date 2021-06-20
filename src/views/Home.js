import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quiz from "../components/Quiz/Quiz";
import CountDown from "../components/Countdown/Countdown";
import Replay from "../components/Replay/Replay";
import Navbar from "../components/Navbar/Navbar";
import Play from "../components/PlayPause/PlayPause";
import Header from "../components/Header/Header";
import Answers from "../components/Answers/Answers";
import {
  fetchQuestions,
  setCurrentQuestion,
  setShowScore,
  setIsPlay,
  setHighScore,
} from "../store/actions/app";

const Home = () => {
  const { counter, score, currentQuestion, questions, showScore, isPlay } =
    useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  useEffect(() => {
    if (counter === 0) {
      dispatch(setShowScore(true));
      dispatch(setHighScore(score));
    }
  }, [counter]);

  return (
    <div className='bg-gray-700 min-h-screen pb-10'>
      <Navbar />
      <div className='container mx-auto'>
        {!isPlay && <Play setIsPlay={setIsPlay} isPlay={isPlay} />}
        {!showScore ? (
          <div>
            <CountDown isPlay={isPlay} counter={counter} />
            <Header />
            <Quiz
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center'>
            <Answers score={score} />
            <Replay />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
