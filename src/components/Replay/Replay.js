import { useDispatch } from "react-redux";
import {
  fetchQuestions,
  setCurrentQuestion,
  setShowScore,
  setCounter,
  setInitScore,
} from "../../store/actions/app";

const Replay = () => {
  const dispatch = useDispatch();
  function replayQuiz() {
    dispatch(setCurrentQuestion(0));
    dispatch(setInitScore(0));
    dispatch(setCounter(60));
    dispatch(fetchQuestions());
    dispatch(setShowScore(false));
  }
  return (
    <div className='replay text-center'>
      <button
        className='p-10 bg-green-700 rounded-full w-28 h-28 flex justify-center items-center cursor-pointer mt-10'
        onClick={replayQuiz}
      >
        <i className='fas fa-sync-alt text-white text-4xl' />
      </button>
      <p className='text-white text-xl mt-4 font-light'>Rejouer ?</p>
    </div>
  );
};

export default Replay;
