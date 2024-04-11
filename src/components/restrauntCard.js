import React, { useState } from "react";
import { IMG_CDN_URL } from "../config";

const RestrautntCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`w-64 h-72 p-2 m-2 shadow-lg bg-red-100 rounded-lg overflow-hidden hover:bg-red-200 ${
        isHovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="object-cover w-full h-40"
        alt="restaurantImg"
      />
      <div className="flex flex-col justify-between">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="text-sm text-gray-600">{cuisines.join(", ")}</h3>
        <div className="flex items-center">
          <span className="text-sm">{avgRating} stars</span>
        </div>
      </div>
    </div>
  );
};

export default RestrautntCard;
