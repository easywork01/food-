import { IMG_CDN_URL } from "../config";

const RestrautntCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-red-100 hover:bg-red-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrautntCard;
