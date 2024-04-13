import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, menu_api_URL } from "../config";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("Props:", resId);
  const [restaurant, setRestaurant] = useState({});
  console.log(restaurant);

  useEffect(() => {
    getRestaurntInfo();
  }, []);

  async function getRestaurntInfo() {
    const data = await fetch(menu_api_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  return (
    <div>
      {/* <h1>Restaurant id:{resId}</h1> */}
      <div className="menu-list">
        {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item, index) => (
            <MenuItem
              key={index}
              name={item.card.info.name}
              price={item.card.info.price}
              imageId={item.card.info.imageId}
            />
          )
        )}
      </div>
      {/* <h2>
        {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item, index) => (
            <span key={index}>{item.card.info.name}, </span>
          )
        )}
      </h2>
      <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
      <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h3>
      <img
        alt=""
        src={
          IMG_CDN_URL +
          restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
      /> */}
    </div>
  );
};
export default RestaurantMenu;
