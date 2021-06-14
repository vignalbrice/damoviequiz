import ActorItem from "../ActorItem/ActorItem";
import Buttons from "../Buttons/Buttons";
import MovieItem from "../MovieItem/MovieItem";

const Quiz = ({ movies, actors, currentQuestion, setCurrentQuestion }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row my-10'>
        {movies[currentQuestion]?.length > 0 && (
          <MovieItem
            key={movies[currentQuestion].id}
            id={movies[currentQuestion].id}
            adult={movies[currentQuestion].adult}
            backdrop_path={movies[currentQuestion].backdrop_path}
            overview={movies[currentQuestion].overview}
            popularity={movies[currentQuestion].popularity}
            poster_path={movies[currentQuestion].poster_path}
            release_date={movies[currentQuestion].release_date}
            title={movies[currentQuestion].title}
            vote_average={movies[currentQuestion].vote_average}
          />
        )}

        {actors[currentQuestion]?.length > 0 && (
          <ActorItem
            key={actors[currentQuestion].id}
            id={actors[currentQuestion].id}
            adult={actors[currentQuestion].adult}
            name={actors[currentQuestion].name}
            known_for_department={actors[currentQuestion].known_for_department}
            profile_path={actors[currentQuestion].profile_path}
            overview={actors[currentQuestion].overview}
            popularity={actors[currentQuestion].popularity}
          />
        )}
      </div>
      {movies.length &&
        actors.length >
          0(
            <Buttons
              setCurrentQuestion={setCurrentQuestion}
              currentQuestion={currentQuestion}
              movieId={movies[currentQuestion]?.id}
              actorId={actors[currentQuestion]?.id}
            />
          )}
    </div>
  );
};

export default Quiz;
