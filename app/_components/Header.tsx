"use client";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 w-full z-1 ">
      <div className="flex justify-around m-3">
        <div className="flex justify-between w-70 font-semibold text-white">
          <div className="border flex items-center px-3 rounded-lg shadow-lg hover:scale-125 transition-transform hover:cursor-pointer">
            Home
          </div>
          <div className="border flex items-center px-3 rounded-lg shadow-lg hover:scale-125 transition-transform hover:cursor-pointer">
            Trips
          </div>
          <div className="border flex items-center px-3 rounded-lg shadow-lg hover:scale-125 transition-transform  hover:cursor-pointer">
            About us
          </div>
        </div>
      </div>
    </div>
  );
};
