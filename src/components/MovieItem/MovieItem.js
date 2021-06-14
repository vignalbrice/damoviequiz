import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../store/selectors/app";

const MovieItem = ({
  id,
  adult,
  backdrop_path,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(title));
  }, [title]);

  return (
    <div className='flex flex-col mx-10'>
      <div className='full-image '>
        <div
          className='backdrop-img wrapper rounded-lg flex flex-col justify-end'
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMG_LINK}/${poster_path})`,
          }}
        >
          <div className='text-white text-lg font-semibold text-center'>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
