import { useDispatch, useSelector } from "react-redux";
import {
  setCounter,
  setHighScore,
  setScore,
  setShowScore,
} from "../../../store/actions/app";
import Swal from "sweetalert2";

const No = ({ setCurrentQuestion, currentQuestion, questions }) => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  function setScoreResult(e) {
    if (questions[currentQuestion].answer.includes(e.target.value)) {
      dispatch(setCurrentQuestion(++currentQuestion));
      dispatch(setCounter(60));
      dispatch(setScore(10));
    } else {
      Swal.fire({
        title: "Oops..mauvaise réponse",
        text: "Vous avez selectionné la mauvaise réponse !",
        icon: "error",
        allowOutsideClick: false,
      }).then((resp) => {
        if (resp.isConfirmed) {
          dispatch(setCurrentQuestion(0));
          dispatch(setShowScore(true));
          dispatch(setHighScore(score));
        }
      });
    }
  }
  return (
    <button
      className='p-5 bg-red-500  text-white border-gray-100 rounded-sm w-64 mx-6 font-medium text-xl hover:translate-y-5'
      value={"faux"}
      onClick={(e) => setScoreResult(e)}
    >
      Non
    </button>
  );
};

export default No;
