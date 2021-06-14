import { useDispatch } from "react-redux";
import fetcher from "../../../helpers/fetcher";
import { setCounter } from "../../../store/selectors/app";

const Yes = ({ setCurrentQuestion, currentQuestion, movieId, actorId }) => {
  const dispatch = useDispatch();
  console.log(movieId);
  async function getCastCrewWithFilms() {
    try {
      const { data } = await fetcher.get(
        `/movie/${movieId}?${process.env.REACT_APP_SECRET_KEY}&append_to_response=credits`
      );
      console.log(
        data.credits.cast.filter((item, index) => item.id === actorId)
      );
    } catch (error) {
      alert(error); // catches both errors
    }
  }

  return (
    <button
      className='p-3 bg-green-500 text-white border-gray-100 rounded-sm w-64 font-medium text-xl'
      onClick={() => {
        setCurrentQuestion(++currentQuestion);
        dispatch(setCounter(60));
        getCastCrewWithFilms();
      }}
    >
      Oui
    </button>
  );
};

export default Yes;
