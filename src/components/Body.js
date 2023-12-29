import RestrautntCard from "./restrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchInput, restrauntList){
          const result = restrauntList.filter( (restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));

          return result;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants]= useState([]); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(""); 
  //declare it state variable outside the retur statement otherwise it will be out of scope
  // const [searchClick, setSearchClick] = useState("false");

  useEffect( () => {
      getRestaurantData();
  }, []);

  async function getRestaurantData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
     
    
    //not render component(early return)
    if(!allRestaurants) return null;

    // if(filteredRestaurants.length ===0) return<h1>Restaurant Not Found</h1>;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
      <>  
      <div className="search-container">

        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
        />
        
        <button 
        className="search-btn" 
        onClick = { ()=> {
          //when we click we need to filter data and find out restraunt is present or not in restraunt list

          const data = filterData(searchInput, allRestaurants);
          console.log(data);
          setFilteredRestaurants(data); 

        } }>Search
        </button>

      </div>
      <div className="restraunt-list">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.id}>
          <RestrautntCard {...restaurant.info} />
          </Link>
        ))}
      </div>
      </>
    );
}
 
export default Body;

