import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-screen h-screen">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 p-2 m-2 shadow-lg bg-white rounded-lg overflow-hidden"
          >
            <div className="animate-pulse relative">
              <div className="h-40 bg-gray-300 mb-2"></div>
              <div className="h-8 bg-gray-300 w-4/5 mb-2"></div>
              <div className="h-6 bg-gray-300 w-3/4"></div>
              <div className="absolute top-0 right-0 mr-2 mt-2">
                <div className="h-6 w-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
