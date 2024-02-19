import { BsBookmarkPlusFill } from "react-icons/bs";
import PropTypes from "prop-types";

export function WatchlistNavButton({ number }) {
  return (
    <div className="flex h-2/3 w-full items-center justify-center rounded-sm px-4 text-gray-200 hover:bg-slate-400/10 active:bg-slate-400/20">
      <BsBookmarkPlusFill size={"1.4rem"} />
      <h3 className="text-md px-1">Watchlist</h3>
      <div className="bg-custom-primary ml-1 h-4 rounded-full px-1.5 text-xs text-black">
        {number}
      </div>
    </div>
  );
}

WatchlistNavButton.propTypes = {
  number: PropTypes.number,
};
