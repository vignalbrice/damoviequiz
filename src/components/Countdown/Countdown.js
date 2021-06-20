import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../../store/actions/app";

const CountDown = ({ isPlay }) => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  // Third Attempts
  useEffect(() => {
    if (isPlay) {
      const timer =
        counter > 0 &&
        setInterval(() => dispatch(setCounter(counter - 1)), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, isPlay]);

  return (
    <div className='text-center py-5'>
      <p className='text-4xl font-medium'>Temps restant</p>
      <p className='text-4xl font-medium'>{counter}s</p>
    </div>
  );
};

export default CountDown;
