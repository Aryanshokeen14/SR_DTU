const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around bg-[#000000] bg-opacity-0 hover:bg-opacity-20 text-white  fixed w-full">
        <div className="flex justify-center items-center gap-4">
            <img  className="h-20 w-16 hover:cursor-pointer" src="/assets/SR.webp" alt="" />
            <p className="font-bold hover:cursor-pointer text-xl">SOCIETY OF ROBOTICS</p></div>
        <ul className="flex justify-center items-center gap-20">
          <li className="hover:cursor-pointer hover:text-blue-300 ">Home</li>
          <li className="hover:cursor-pointer hover:text-blue-300 ">Explore</li>
          <li className="hover:cursor-pointer hover:text-blue-300 ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
