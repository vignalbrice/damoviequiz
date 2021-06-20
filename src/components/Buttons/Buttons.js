import No from "./No/No";
import Yes from "./Yes/Yes";

const Buttons = ({ setCurrentQuestion, currentQuestion, questions }) => {
  return (
    <div className='flex flex-row'>
      <No
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        questions={questions}
      />
      <Yes
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        questions={questions}
      />
    </div>
  );
};

export default Buttons;
