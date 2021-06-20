import ActorItem from "../ActorItem/ActorItem";
import Buttons from "../Buttons/Buttons";
import MovieItem from "../MovieItem/MovieItem";

const Quiz = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  setScore,
  setShowScore,
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row my-10'>
        <MovieItem
          key={questions[currentQuestion]?.id}
          id={questions[currentQuestion]?.id}
          movie={questions[currentQuestion]?.movie}
          picture={questions[currentQuestion]?.poster}
        />

        <ActorItem
          key={questions[currentQuestion]?.castId}
          id={questions[currentQuestion]?.id}
          actor={questions[currentQuestion]?.actor}
          picture={questions[currentQuestion]?.picture}
        />
      </div>
      {questions.length > 0 && (
        <Buttons
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          questions={questions}
        />
      )}
    </div>
  );
};

export default Quiz;
