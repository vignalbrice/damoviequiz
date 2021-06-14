import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActor } from "../../store/selectors/app";

const ActorItem = ({
  id,
  adult,
  name,
  known_for_department,
  profile_path,
  overview,
  popularity,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActor(name));
  }, [name]);

  return (
    <div className='flex flex-col'>
      <div className='full-image'>
        <div
          className='backdrop-img wrapper rounded-lg flex flex-col justify-end'
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMG_LINK}${profile_path})`,
          }}
        >
          <div className='text-white text-lg font-semibold text-center'>
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
