import { useDispatch, useSelector } from "react-redux";
import {
  setCounter,
  setHighScore,
  setScore,
  setShowScore,
} from "../../../store/actions/app";
import Swal from "sweetalert2";

const Yes = ({ setCurrentQuestion, currentQuestion, questions }) => {
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
        text: "Vous avez perdu ! :(",
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

  if (currentQuestion < questions.length) {
    return (
      <button
        className='p-3 bg-green-500 text-white border-gray-100 rounded-sm w-64 font-medium text-xl'
        value={"vrai"}
        onClick={(e) => setScoreResult(e)}
      >
        Oui
      </button>
    );
  }
};

export default Yes;
