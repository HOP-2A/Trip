"use client";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 w-full z-1 ">
      <div className="flex justify-around m-3">
        <div className="flex justify-between w-70">
          <div className="border  flex items-center font-semibold px-3  rounded-lg shadow-lg hover:scale-105 transition-transform text-white">
            Home
          </div>
          <div className="border  flex items-center font-semibold px-3 rounded-lg shadow-lg hover:scale-105 transition-transform text-white">
            Trips
          </div>
          <div className="border  flex items-center font-semibold px-3 rounded-lg shadow-lg hover:scale-105 transition-transform text-white">
            About us
          </div>
        </div>
      </div>
    </div>
  );
};
