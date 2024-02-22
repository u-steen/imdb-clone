import MoviePosterItem from "../MoviePosterItem";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SiRottentomatoes } from "react-icons/si";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

// HACK: passing the function and the argument (index) is awkward
const MovieRollItem = ({ movie, handleClick, index }) => {
  return (
    <div
      onClick={() => {
        handleClick(index);
      }}
      className="relative h-[8.6rem] overflow-hidden"
    >
      <img
        className="absolute top-[-6rem] brightness-[0.9] duration-200 hover:scale-[1.02] hover:brightness-[0.65] active:brightness-105"
        src={movie.poster_url}
        alt="poster"
      />
      <h4 className="absolute bottom-0 flex w-full items-center bg-zinc-800/50 px-2 py-[0.1rem] text-lg font-extrabold text-gray-50">
        {movie.movie_title}
      </h4>
    </div>
  );
};

MovieRollItem.propTypes = {
  movie: PropTypes.element,
  handleClick: PropTypes.func,
  index: PropTypes.number,
};

const Herobox = ({ movieRoll }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const currentMovie = movieRoll[currentMovieIndex];

  const nextMovie = () => {
    const nextIndex = (currentMovieIndex + 1) % movieRoll.length;
    setCurrentMovieIndex(nextIndex);
  };

  const previousMovie = () => {
    const nextIndex = (currentMovieIndex - 1) % movieRoll.length;
    if (nextIndex < 0) setCurrentMovieIndex(movieRoll.length - 1);
    else setCurrentMovieIndex(nextIndex);
  };

  return (
    <div className="flex">
      {/* Poster */}
      <div className="mr-2">
        <MoviePosterItem // size={"20rem"}
          url={currentMovie.poster_url}
        />
      </div>
      {/* Description Box */}
      <div className="relative h-[30rem] w-[66rem]">
        {/* Title */}
        <div className="p-6">
          <h1 className="font-oswald text-5xl font-extrabold text-white">
            {currentMovie.movie_title.toUpperCase()}
          </h1>
          <h4 className="text-gray-400">({currentMovie.year})</h4>
        </div>
        {/* Description */}
        <div className="bg-gradient-to-b from-custom-darkgray to-black p-6 px-10">
          <p className="text-lg text-white">{currentMovie.description}</p>
        </div>
        {/* Button box */}
        <div className="item absolute bottom-0 left-4 flex w-[35rem] justify-start">
          {/* Button 1 */}
          {currentMovie.trailer_url && (
            <a
              href={currentMovie.trailer_url}
              target="_blank"
              className="mr-2 flex h-14 w-1/2 items-center justify-center bg-custom-darkgray hover:bg-custom-darkgray-hover active:bg-custom-darkgray-active"
            >
              <button className="flex items-center justify-center text-white">
                <FaRegCirclePlay size={"2rem"} />
                <h4 className="ml-2 text-lg font-bold">Watch Trailer</h4>
                <FaExternalLinkAlt
                  className="ml-4 text-gray-500"
                  size={"0.8rem"}
                />
              </button>
            </a>
          )}
          {/* Button 2 */}
          {currentMovie.rt_url && (
            <a
              href={currentMovie.rt_url}
              target="_blank"
              className="flex h-14 w-1/2 items-center justify-center bg-custom-darkgray hover:bg-[#181818] active:bg-[#282828]"
            >
              <button className="flex items-center justify-center text-white">
                <SiRottentomatoes size={"2rem"} />
                <h4 className="ml-2 text-lg font-bold">Where can I watch?</h4>
                <FaExternalLinkAlt
                  className="ml-4 text-gray-500"
                  size={"0.8rem"}
                />
              </button>
            </a>
          )}
        </div>
        {/* Next and Prev Buttons */}
        <button
          onClick={previousMovie}
          className="absolute left-0 top-52 flex h-16 w-8 items-center justify-center rounded-r-md border-b-[1px] border-r-[1px] border-t-[1px] border-gray-400 bg-custom-darkgray/50 text-white hover:bg-[#505050]/40 active:bg-custom-darkgray-active"
        >
          <FaChevronLeft size={"1.5rem"} />
        </button>
        <button
          onClick={nextMovie}
          className="absolute right-0 top-52 flex h-16 w-8 items-center justify-center rounded-l-md border-b-[1px] border-l-[1px] border-t-[1px] border-gray-400 bg-custom-darkgray/50 text-white hover:bg-[#505050]/40 active:bg-custom-darkgray-active"
        >
          <FaChevronRight size={"1.5rem"} />
        </button>
      </div>
      {/* Up next */}
      <div className="ml-2 h-fit w-[32rem]">
        <div className="p-2">
          <h3 className="text-2xl font-semibold text-custom-primary">
            Up next
          </h3>
        </div>
        <div className="flex w-full flex-col justify-between gap-2">
          <MovieRollItem
            movie={movieRoll[(currentMovieIndex + 1) % movieRoll.length]}
            handleClick={setCurrentMovieIndex}
            index={(currentMovieIndex + 1) % movieRoll.length}
          />
          <MovieRollItem
            movie={movieRoll[(currentMovieIndex + 2) % movieRoll.length]}
            handleClick={setCurrentMovieIndex}
            index={(currentMovieIndex + 2) % movieRoll.length}
          />
          <MovieRollItem
            movie={movieRoll[(currentMovieIndex + 3) % movieRoll.length]}
            handleClick={setCurrentMovieIndex}
            index={(currentMovieIndex + 3) % movieRoll.length}
          />
        </div>
      </div>
    </div>
  );
};

Herobox.propTypes = {
  movieRoll: PropTypes.arrayOf(PropTypes.object),
};

export default Herobox;
