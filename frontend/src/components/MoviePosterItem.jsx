import { PropTypes } from "prop-types";
import { FaPlus } from "react-icons/fa6";

const MoviePosterItem = ({ url }) => {
  return (
    <div className={`relative h-[30rem] w-[20rem] overflow-hidden`}>
      <img src={url} alt="teapa" className="duration-200 hover:scale-105" />
      {/* Add to watchlist button */}
      <div className="clip-watchlist-shape absolute left-0 top-0  h-20 w-14 border-zinc-200 bg-zinc-900/60 hover:bg-zinc-500/70">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 transform text-white">
          <FaPlus size={"2rem"} />
        </div>
      </div>
    </div>
  );
};

MoviePosterItem.propTypes = {
  url: PropTypes.string,
};

MoviePosterItem.defaultProps = {
  size: "24rem",
};

export default MoviePosterItem;
