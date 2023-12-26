import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { IMG_CDN_URL } from '../config';

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({});
    console.log(restaurant);

    useEffect( ()=>{
        getRestaurntInfo();
    },[]);

    async function getRestaurntInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=435733&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    return (<div> 
        <h1>Restaurant id:{id}</h1>
        <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <img alt ="" src = {IMG_CDN_URL+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
    </div>);
}
export default RestaurantMenu;