import Herobox from "./../components/herobox/Herobox";

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
