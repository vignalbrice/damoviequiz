import No from "./No/No";
import Yes from "./Yes/Yes";

const Buttons = ({ setCurrentQuestion, currentQuestion, movieId, actorId }) => {
  return (
    <div className='flex flex-row'>
      <No
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
      <Yes
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        movieId={movieId}
        actorId={actorId}
      />
    </div>
  );
};

export default Buttons;
