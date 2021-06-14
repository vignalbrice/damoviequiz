import { useDispatch } from "react-redux";
import { setCounter } from "../../../store/selectors/app";

const No = ({ setCurrentQuestion, currentQuestion }) => {
  const dispatch = useDispatch();

  return (
    <button
      className='p-5 bg-red-500  text-white border-gray-100 rounded-sm w-64 mx-6 font-medium text-xl hover:translate-y-5'
      onClick={() => {
        setCurrentQuestion(++currentQuestion);
        dispatch(setCounter(60));
      }}
    >
      Non
    </button>
  );
};

export default No;
