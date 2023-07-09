import React from "react";
import { Link } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 6];
const Landing = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl m-auto p-3 px-6">
        <div className="flex flex-col items-center gap-10">
          <h3 className="font-normal text-gray-700 tracking-wider text-5xl">Home Page</h3>
          <p className="text-center text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend varius tempor. Phasellus faucibus sed felis vitae semper. Nulla
            elit arcu, consectetur eu orci eget, luctus fringilla magna. Sed ornare turpis quis odio suscipit gravida. Ut ut diam nec nisl laoreet
            molestie eget in erat. Sed massa nibh, pharetra sit amet lectus eget, imperdiet laoreet dui. Pellentesque dignissim erat nisl, non
            sollicitudin lectus dictum quis.
          </p>
          <div className="flex gap-3">
            <Link to="/pricing">
              <button className="w-[100px] h-[40px] border rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200 active:font-extrabold">
                Pricing
              </button>
            </Link>
            <Link to="/pricing">
              <button className="w-[100px] h-[40px] border rounded-md border-blue-700 hover:bg-blue-100 transition-colors duration-200 active:font-extrabold">
                Pricing
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20 gap-7">
          {items.map((item) => (
            <div key={item} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                  praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mr-2 mb-2">View</span>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mr-2 mb-2">Edit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
