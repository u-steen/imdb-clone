const Container = ({ children }) => {
  return (
    <>
      <div className="container mx-auto w-full font-roboto md:w-[750px] lg:w-[1000px] xl:w-[1200px]">
        {children}
      </div>
    </>
  );
};

export default Container;
