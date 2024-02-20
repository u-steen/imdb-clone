import Herobox from "./../components/herobox/Herobox";
import movies_db from "/src/assets/movies_db.json";
import { FaPlus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="relative h-[31rem] w-52 rounded-md bg-zinc-900">
      {/* Poster */}
      <div className="h-[19.5rem] overflow-hidden">
        <img className="w-full" src={movie.poster_url} alt="poster" />
      </div>
      {/* Watchlist flag */}
      <div className="clip-watchlist-shape absolute left-0 top-0 h-14 w-10 border-zinc-200 bg-zinc-900/60 hover:bg-zinc-500/70">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 transform text-white">
          <FaPlus size={"1.5rem"} />
        </div>
      </div>
      {/* Title */}
      <div className="flex h-20 items-center pl-2">
        <h3 className="text-lg text-gray-100">{movie.movie_title}</h3>
      </div>
      {/* Buttons */}
      <div className="mx-auto w-11/12">
        {/* Add to watchlist */}
        <div className="flex items-center justify-center rounded-md bg-zinc-200/10 p-2 hover:bg-zinc-200/20 active:bg-zinc-200/30">
          <h4 className="flex items-center justify-center text-lg font-bold text-blue-400">
            <FaPlus size={"1.1rem"} />
            <h4 className="ml-1">Watchlist</h4>
          </h4>
        </div>
        {/* Trailer */}
        {movie.trailer_url && (
          <a href={movie.trailer_url} target="_blank">
            <div className="mt-2 flex items-center justify-center rounded-md p-2 hover:bg-zinc-200/10 active:bg-zinc-200/20">
              <h4 className="text-lg text-white">Trailer</h4>
              <FaExternalLinkAlt
                className="ml-2 text-gray-600"
                size={"0.8rem"}
              />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const movieRoll = [
    movies_db[0],
    movies_db[1],
    movies_db[2],
    movies_db[3],
    movies_db[4],
  ];

  return (
    <>
      <div className="font-roboto container mx-auto w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px]">
        <div className="h-6" />
        {/* Hero Box */}
        <Herobox movieRoll={movieRoll} />
        <div className="h-32" />
        {/* What to watch List*/}
        <div className="">
          <div className="mb-12 border-b-2 border-custom-primary p-2">
            <h1 className="font-oswald text-4xl font-extrabold text-custom-primary">
              What to Watch
            </h1>
          </div>
          {/* Top Picks */}
          <div className="mb-16">
            <div className="mb-2">
              <h1 className="font-oswald text-3xl font-bold text-custom-primary">
                Top Picks
              </h1>
            </div>
            <div className="flex items-center justify-start gap-6">
              <MovieCard movie={movies_db[1]} />
              <MovieCard movie={movies_db[0]} />
              <MovieCard movie={movies_db[2]} />
              <MovieCard movie={movies_db[3]} />
            </div>
          </div>
          {/* From your Watchlist */}
          <div className="mb-16">
            <div className="mb-2">
              <h1 className="font-oswald text-3xl font-bold text-custom-primary">
                From your Watchlist
              </h1>
            </div>
            <div className="flex items-center justify-start gap-6">
              <MovieCard movie={movies_db[0]} />
              <MovieCard movie={movies_db[1]} />
              <MovieCard movie={movies_db[3]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
