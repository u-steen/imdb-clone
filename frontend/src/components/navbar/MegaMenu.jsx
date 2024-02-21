import Logo from "../Logo";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { AiFillPlaySquare } from "react-icons/ai";

const MenuItem = ({ text }) => {
  return <h4 className="p-2 text-lg hover:underline">{text}</h4>;
};

const MenuTitle = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-2 p-2 text-custom-primary">
      <h2 className="text-2xl font-bold">{text}</h2>
      {icon && <div>{icon}</div>}
    </div>
  );
};

MenuTitle.PropTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

const MegaMenu = ({ handleClose }) => {
  useEffect(() => {}, []);
  return (
    <div className="absolute left-0 top-0 z-20 h-full w-full bg-custom-darkgray font-roboto">
      <div className="container mx-auto mt-12 w-5/6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo className={"fill-custom-primary"} size={1.8} />
          {/* Close Button */}
          <div
            onClick={handleClose}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-custom-primary text-3xl hover:brightness-90"
          >
            <FaXmark size={"1.8rem"} />
          </div>
        </div>
        <div className="h-8"></div>
        {/* Content */}
        <div className="flex gap-6 text-white">
          {/* Col 1 */}
          <div className="w-1/3">
            {/* Movies */}
            <div className="h-fit rounded-lg bg-slate-400/10 p-4">
              <div>
                <MenuTitle
                  text="Movies"
                  icon={<MdLocalMovies size={"1.5rem"} />}
                />
              </div>
              <MenuItem text="Release Calender" />
              <MenuItem text="Top 250 Movies" />
              <MenuItem text="Most popular Movies" />
              <MenuItem text="Browse Movie by Genre" />
            </div>

            <div className="h-6"></div>
            {/* TV Shows */}
            <div className="h-fit rounded-lg bg-slate-400/10 p-4">
              <MenuTitle text="TV Shows" icon={<FaTv size={"1.3rem"} />} />

              <MenuItem text="What's on TV and Streaming" />
              <MenuItem text="Top 250 TV Shows" />
              <MenuItem text="Most popular TV Shows" />
            </div>
          </div>
          {/* Col 2 */}
          <div className="w-1/3">
            {/* Watch */}
            <div className="h-fit rounded-lg bg-slate-400/10 p-4">
              <MenuTitle
                text="Watch"
                icon={<AiFillPlaySquare size={"1.5rem"} />}
              />

              <MenuItem text="What to Watch" />
              <MenuItem text="Latest Trailers" />
              <MenuItem text="IMDb Originals" />
              <MenuItem text="IMDb Picks" />
              <MenuItem text="IMDb Spotlight" />
              <MenuItem text="IMDb Podcasts" />
            </div>
          </div>
          {/* Col 3 */}
          <div className="w-1/3">
            {/* Awards and Events */}
            <div className="h-fit rounded-lg bg-slate-400/10 p-4">
              <MenuTitle
                text="Awards & Events"
                icon={<MdStars size={"1.5rem"} />}
              />

              <MenuItem text="Oscars" />
              <MenuItem text="Sundance Film Festival" />
              <MenuItem text="Awards Central" />
              <MenuItem text="Festival Central" />
              <MenuItem text="All Events" />
            </div>
            <div className="h-6"></div>
            {/* Celebs */}
            <div className="h-fit rounded-lg bg-slate-400/10 p-4">
              <MenuTitle text="Celebs" icon={<MdPeople size={"1.5rem"} />} />

              <MenuItem text="Born Today" />
              <MenuItem text="Most popular Celebs" />
              <MenuItem text="Celebrity News" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MegaMenu.PropTypes = {
  handleClose: PropTypes.func,
};

export default MegaMenu;
