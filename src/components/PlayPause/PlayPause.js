const PlayPause = ({ isPlay, setIsPlay }) => {
  return (
    <div className='backdrop'>
      <div className='play-pause'>
        <div
          className='p-10 bg-red-700 rounded-full w-28 h-28 flex justify-center items-center cursor-pointer'
          onClick={() => setIsPlay(!isPlay)}
        >
          <i className='fas fa-play text-white text-lg'></i>
        </div>
      </div>
    </div>
  );
};

export default PlayPause;
