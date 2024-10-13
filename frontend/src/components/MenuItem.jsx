const MenuItem = ({ name, handleClick, icon }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className=" flex w-full p-4 text-left hover:bg-white hover:text-blue-500"
      >
        <span className=" my-auto px-2">{icon}</span> {name}
      </button>
    </>
  );
};

export default MenuItem;
