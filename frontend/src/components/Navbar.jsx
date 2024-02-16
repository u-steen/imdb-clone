import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
      <div className="top-0 z-10  w-full bg-zinc-900">
        <div className="mx-auto flex h-14 w-full md:w-[750px] lg:w-[1000px]">
          <div className="flex h-full w-24 items-center justify-center text-2xl font-extrabold">
            <div className="rounded-sm bg-yellow-400 px-1">IMDb</div>
          </div>
          <div className="flex w-28 items-center justify-center">
            <div className="flex w-11/12 items-center justify-center rounded-md py-0.5 text-gray-200 hover:bg-slate-400/10 active:bg-slate-400/20">
              <HiOutlineMenu size={"1.4rem"} />
              <h3 className="pl-1 text-lg font-semibold">Menu</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
