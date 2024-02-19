import movies_db from "/src/assets/movies_db.json";
import MoviePosterItem from "../components/MoviePosterItem";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SiRottentomatoes } from "react-icons/si";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px]">
        {/* Hero Box */}
        <div className="">
          {/* Main Container */}
          <Herobox />
        </div>
      </div>
    </>
  );
};

export default Home;

const Herobox = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const currentMovie = movies_db[currentMovieIndex];
  const nextMovie = () => {
    const nextIndex = (currentMovieIndex + 1) % movies_db.length;
    setCurrentMovieIndex(nextIndex);
  };
  const previousMovie = () => {
    const nextIndex = (currentMovieIndex - 1) % movies_db.length;
    if (nextIndex < 0) setCurrentMovieIndex(movies_db.length - 1);
    else setCurrentMovieIndex(nextIndex);
  };
  return (
    <div className="flex">
      {/* Poster */}
      <div className="">
        <MoviePosterItem // size={"20rem"}
          className=""
          url={currentMovie.poster_url}
        />
      </div>
      {/* Description Box */}
      <div className="relative w-[66rem]">
        {/* Title */}
        <div className="p-6">
          <h1 className="text-5xl font-extrabold text-white">
            {currentMovie.movie_title}
          </h1>
        </div>
        {/* Description */}
        <div className="bg-custom-darkgray p-6 px-10">
          <p className="text-lg text-white">{currentMovie.description}</p>
        </div>
        {/* Button box */}
        <div className="item absolute bottom-0 left-4 flex w-[35rem] justify-center">
          <div className="hover:bg-custom-darkgray-hover active:bg-custom-darkgray-active mr-2 flex h-14 w-1/2 items-center justify-center bg-custom-darkgray">
            <button className="flex items-center justify-center text-white">
              <FaRegCirclePlay size={"2rem"} />
              <h4 className="ml-2 text-lg font-bold">Watch Trailer</h4>
            </button>
          </div>
          <div className="flex h-14 w-1/2 items-center justify-center bg-custom-darkgray hover:bg-[#181818] active:bg-[#282828]">
            <button className="flex items-center justify-center text-white">
              <SiRottentomatoes size={"2rem"} />
              <h4 className="ml-2 text-lg font-bold">Where can I watch?</h4>
            </button>
          </div>
        </div>
        {/* Next and Prev Buttons */}
        <button
          onClick={previousMovie}
          className="active:bg-custom-darkgray-active absolute left-0 top-52 flex h-16 w-8 items-center justify-center rounded-r-md border-b-[1px] border-r-[1px] border-t-[1px] border-gray-400 bg-custom-darkgray/50 text-white hover:bg-[#505050]/40"
        >
          <FaChevronLeft size={"1.5rem"} />
        </button>
        <button
          onClick={nextMovie}
          className="active:bg-custom-darkgray-active absolute right-0 top-52 flex h-16 w-8 items-center justify-center rounded-l-md border-b-[1px] border-l-[1px] border-t-[1px] border-gray-400 bg-custom-darkgray/50 text-white hover:bg-[#505050]/40"
        >
          <FaChevronRight size={"1.5rem"} />
        </button>
      </div>
      {/* Up next */}
      <div className="ml-2 w-[32rem] bg-yellow-200">
        <div className="bg-green-200 p-2">
          <h3 className="text-2xl font-semibold">Up next</h3>
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="h-[9rem] bg-purple-300">NEXT</div>
          <div className="h-[9rem] bg-purple-400">NEXT</div>
          <div className="h-[9rem] bg-purple-300">NEXT</div>
        </div>
      </div>
    </div>
  );
};
