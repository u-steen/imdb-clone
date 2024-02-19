import { WatchlistNavButton } from "./WatchlistNavButton";
import { HiOutlineMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import Logo from "../Logo";
import ProfileNavButton from "./ProfileNavButton";
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";
import { IoMdKey } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [filter, setFilter] = useState("All");
  const [searchBar, setSearchBar] = useState("");

  const handleFilterOpen = () => {
    setIsFilterOpened(!isFilterOpened);
  };

  const handleFilterClick = (newName) => {
    setFilter(newName);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ filter: e.target[0].value, searchTerm: e.target[1].value });
    setSearchBar("");
    setFilter("All");
  };
  return (
    <>
      <div className="top-0 z-10  w-full bg-custom-darkgray">
        <div className="mx-auto flex h-14 w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px]">
          {/* LOGO */}
          <div className="flex h-full w-fit items-center justify-center text-2xl font-extrabold">
            {/* <div className="rounded-sm bg-yellow-400 px-1">IMDb</div> */}
            <Link to="/">
              <Logo className="fill-custom-primary" />
            </Link>
          </div>
          {/* MENU */}
          <div className="flex w-28 items-center justify-center">
            <div className="flex w-11/12 items-center justify-center rounded-md py-0.5 text-gray-200 hover:bg-slate-400/10 active:bg-slate-400/20">
              <HiOutlineMenu size={"1.4rem"} />
              <h3 className="pl-1 text-lg font-semibold">Menu</h3>
            </div>
          </div>
          {/* SEARCH BAR */}
          <div className="flex grow items-center">
            <form
              onSubmit={handleSearch}
              className="mx-auto flex h-8 w-full items-center justify-between"
            >
              <div
                onClick={handleFilterOpen}
                className=" relative flex h-full items-center justify-center rounded-l-sm border-r-2 border-gray-700 bg-gray-200 px-2"
              >
                <div className="mr-1 font-bold">{filter}</div>
                <FaCaretDown size={"0.9rem"} />
                {/* Filter Dropdown */}
                <input type="hidden" name="filter" value={filter} />
                {isFilterOpened && (
                  <div className="absolute left-0 top-[2.3rem] z-20 w-48 rounded-md bg-zinc-800 py-2">
                    <DropdownItem name={"All"} handleClick={handleFilterClick}>
                      <IoSearch size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem
                      name={"Title"}
                      handleClick={handleFilterClick}
                    >
                      <MdLocalMovies size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem
                      name={"TV Episodes"}
                      handleClick={handleFilterClick}
                    >
                      <FaTv size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem
                      name={"Celebs"}
                      handleClick={handleFilterClick}
                    >
                      <MdPeople size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem
                      name={"Companies"}
                      handleClick={handleFilterClick}
                    >
                      <PiBuildingsBold size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem
                      name={"Keywords"}
                      handleClick={handleFilterClick}
                    >
                      <IoMdKey size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"Advanced Search"} delimiter={true}>
                      <AiOutlineFileSearch size={"1.25rem"} />
                    </DropdownItem>
                  </div>
                )}
              </div>
              <div className="flex h-8 grow items-center justify-start">
                <input
                  type="text"
                  placeholder=" Search IMDb"
                  className="h-full w-full"
                  onChange={(e) => {
                    setSearchBar(e.target.value);
                  }}
                  value={searchBar}
                ></input>
              </div>
              <button
                type={"submit"}
                className="flex h-8 items-center justify-center rounded-r-sm bg-gray-200 p-2"
              >
                <IoSearch size={"1.5rem"} />
              </button>
            </form>
          </div>
          {/* WATCH LIST */}
          <div className="flex w-fit items-center justify-center">
            <WatchlistNavButton number={10} />
          </div>
          {/* PROFILE */}
          <div className="relative flex w-fit items-center justify-center">
            <ProfileNavButton username="Iustin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
