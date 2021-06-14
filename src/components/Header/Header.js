import { useSelector } from "react-redux";
import { getActor, getTitle } from "../../store/selectors/app";

const Header = () => {
  const actor = useSelector(getActor);
  const title = useSelector(getTitle);

  return (
    <div>
      <p className='text-center text-xl'>
        Est ce que {actor} à joué dans {title}
      </p>
    </div>
  );
};

export default Header;
