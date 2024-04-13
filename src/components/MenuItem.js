import React from "react";
import { IMG_CDN_URL } from "../config";

const MenuItem = ({ name, imageId, price }) => {
  return (
    <div className="flex items-center border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
      <div className="mr-4">
        <img
          src={IMG_CDN_URL + imageId}
          alt={name}
          className="w-24 h-24 rounded-md"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600">₹{price / 100}</p>
      </div>
    </div>
  );
};

export default MenuItem;
