import RestrautntCard from "./restrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../config";

function filterData(searchInput, restrauntList) {
  const result = restrauntList.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );

  return result;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //declare it state variable outside the retur statement otherwise it will be out of scope
  // const [searchClick, setSearchClick] = useState("false");

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // ); CORS ERROR
    try {
      const data = await fetch(swiggy_api_URL); //""data/response"
      const json = await data.json();
      console.log(json);
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  //not render component(early return)
  if (!allRestaurants) return null;

  // if(filteredRestaurants.length ===0) return<h1>Restaurant Not Found</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg- bg-red-400 my-5 ">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2 rounded-lg"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="p-2 m-2 bg-red-600 rounded-lg text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => {
            //when we click we need to filter data and find out restraunt is present or not in restraunt list

            const data = filterData(searchInput, allRestaurants);
            console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.id}>
            <RestrautntCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
