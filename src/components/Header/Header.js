import { useSelector } from "react-redux";

const Header = () => {
  const { questions, currentQuestion } = useSelector((state) => state);

  return (
    <div>
      <p className='text-center text-xl'>
        Est ce que {questions[currentQuestion]?.actor} à joué dans{" "}
        {questions[currentQuestion]?.movie} ?
      </p>
    </div>
  );
};

export default Header;
