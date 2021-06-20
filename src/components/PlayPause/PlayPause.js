import { useDispatch } from "react-redux";

const PlayPause = ({ isPlay, setIsPlay }) => {
  const dispatch = useDispatch();

  return (
    <div className='backdrop'>
      <div className='play-pause'>
        <button
          className='p-10 bg-red-700 rounded-full w-28 h-28 flex justify-center items-center cursor-pointer'
          onClick={() => dispatch(setIsPlay(!isPlay))}
        >
          <i className='fas fa-play text-white text-lg'></i>
        </button>
      </div>
    </div>
  );
};

export default PlayPause;
