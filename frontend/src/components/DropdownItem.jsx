import PropTypes from "prop-types";

const DropdownItem = ({ name, delimiter, children }) => {
  return (
    <>
      {delimiter ? (
        <div className="block border-t-2 border-zinc-200/10 p-4 hover:bg-zinc-200/10 active:bg-zinc-200/20">
          <div className="text-md flex items-center justify-start text-gray-200">
            <div className="mr-4 text-gray-400">{children}</div>
            {name}
          </div>
        </div>
      ) : (
        <div className="block p-4 hover:bg-zinc-200/10 active:bg-zinc-200/20">
          <div className="text-md flex text-gray-200">
            <div className="mr-4 text-gray-400">{children}</div>
            {name}
          </div>
        </div>
      )}
    </>
  );
};
DropdownItem.propTypes = {
  name: PropTypes.string,
  delimiter: PropTypes.bool,
  children: PropTypes.element,
};

export default DropdownItem;
