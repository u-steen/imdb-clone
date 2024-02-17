import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { useState } from "react";

export const DropdownItem = ({ name }) => {
  return (
    <div className="block p-4 hover:bg-zinc-200/10 active:bg-zinc-200/20">
      <div className="text-md text-gray-200">{name}</div>
    </div>
  );
};

const ProfileNavButton = ({ username }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="flex h-2/3 items-center justify-center rounded-sm px-2 text-gray-200 hover:bg-slate-400/10 active:bg-slate-400/20"
      >
        <FaUserCircle size={"1.5rem"} />
        <h3 className="mx-1 text-sm font-extrabold">{username}</h3>
        {isOpened ? (
          <FaCaretUp size={"0.8rem"} />
        ) : (
          <FaCaretDown size={"0.8rem"} />
        )}
      </button>
      {/* Dropdown */}
      {isOpened && (
        <div className="absolute right-0 top-[3.2rem] z-20 w-40 rounded-md bg-zinc-800 py-2">
          <DropdownItem name={"Your Activity"} />
          <DropdownItem name={"Your Watchlist"} />
          <DropdownItem name={"Your Ratings"} />
          <DropdownItem name={"Your Lists"} />
          <DropdownItem name={"Account Settings"} />
          <DropdownItem name={"Sign out"} />
        </div>
      )}
    </>
  );
};

ProfileNavButton.propTypes = {
  username: PropTypes.string,
};

export default ProfileNavButton;
