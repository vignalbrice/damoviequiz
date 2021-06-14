import { useEffect, useState } from "react";
import fetcher from "../helpers/fetcher";
import Quiz from "../components/Quiz/Quiz";
import CountDown from "../components/Countdown/Countdown";
import Navbar from "../components/Navbar/Navbar";
import Play from "../components/PlayPause/PlayPause";
import Header from "../components/Header/Header";
import Answers from "../components/Answers/Answers";
import {
  generateRandomNumber,
  generateRandomQuestions,
} from "../helpers/utils";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    try {
      const { data } = await fetcher.get(
        `/now_playing?api_key=${process.env.REACT_APP_SECRET_KEY}`
      );
      setMovies(
        data.results.map(({ id, title }) => ({
          id,
          movie: title,
        }))
      );
      try {
        setActors(
          await axios.all(
            movies.map(async ({ id }) => {
              const cast = await fetcher.get(
                `/${id}/credits?api_key=${process.env.REACT_APP_SECRET_KEY}`
              );
              return {
                id,
                actor: cast.data.cast[0].name,
                picture: cast.data.cast[0].profile_path,
              };
            })
          )
        );
      } catch (error) {
        console.log("error", error);
      }

      const randomNumber = generateRandomNumber();
      const randomMarks = generateRandomQuestions(movies.length, randomNumber);

      const questionsData = actors.map((item, i) => {
        return Object.assign(
          {},
          item,
          movies[
            randomMarks[i] === true
              ? i
              : Math.floor(Math.random() * movies.length)
          ]
        );
      });

      const questionsWithAnswers = questionsData.map((item, index) => {
        return Object.assign({}, item, {
          answer: actors[index].id === item.id ? "true" : "false",
        });
      });

      setQuestions(questionsWithAnswers.sort(() => Math.random() - 0.5));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-gray-700 min-h-screen pb-10'>
      <Navbar />

      <div className='container mx-auto'>
        {!isPlay && <Play setIsPlay={setIsPlay} isPlay={isPlay} />}
        <CountDown />
        <Header />
        {!showScore ? (
          <Quiz
            movies={movies}
            actors={actors}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            setShowScore={setShowScore}
          />
        ) : (
          <Answers score={score} />
        )}
      </div>
    </div>
  );
};

export default Home;
