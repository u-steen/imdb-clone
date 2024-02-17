import { WatchlistNavButton } from "./WatchlistNavButton";
import { HiOutlineMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import Logo from "./Logo";
import ProfileNavButton from "./ProfileNavButton";
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { PiBuildingsBold } from "react-icons/pi";
import { IoMdKey } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";

const Navbar = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const handleFilterOpen = () => {
    setIsFilterOpened(!isFilterOpened);
  };
  return (
    <>
      <div className="bg-custom-darkgray top-0  z-10 w-full">
        <div className="mx-auto flex h-14 w-full md:w-[750px] lg:w-[1000px] xl:w-[1200px]">
          {/* LOGO */}
          <div className="flex h-full w-24 items-center justify-center text-2xl font-extrabold">
            {/* <div className="rounded-sm bg-yellow-400 px-1">IMDb</div> */}
            <Logo className="fill-custom-primary" />
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
            <div className="mx-auto flex h-8 w-full items-center justify-between">
              <div
                onClick={handleFilterOpen}
                className=" relative flex h-full items-center justify-center rounded-l-sm border-r-2 border-gray-700 bg-gray-200 px-2"
              >
                <div className="mr-1 font-bold">All</div>
                <FaCaretDown size={"0.9rem"} />
                {/* Filter Dropdown */}
                {isFilterOpened && (
                  <div className="absolute left-0 top-[2.3rem] z-20 w-48 rounded-md bg-zinc-800 py-2">
                    <DropdownItem name={"All"}>
                      <IoSearch size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"Title"}>
                      <MdLocalMovies size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"TV Episodes"}>
                      <FaTv size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"Celebs"}>
                      <MdPeople size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"Companies"}>
                      <PiBuildingsBold size={"1.25rem"} />
                    </DropdownItem>
                    <DropdownItem name={"Keywords"}>
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
                ></input>
              </div>
              <div className="flex h-8 items-center justify-center rounded-r-sm bg-gray-200 p-2">
                <IoSearch size={"1.5rem"} />
              </div>
            </div>
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