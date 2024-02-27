import RestaurantCard from "./RestraurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";

// console.log(resList);
// console.log(resList[0].cards[3].card.card.info.areaName);
// const initial = resList[0];

const Body = () => {
  //  Local State variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //   console.log(listOfRestaurant);
  const [searchText, setSearchText] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  useEffect(
    (e) => {
      console.log("useEffect2 called");
      fetchExtraData();
    },
    [buttonClick]
  );

  const fetchExtraData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant((prevList) => [
      ...prevList,
      ...(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []),
    ]);

    setFilteredRestaurant((prevList) => [
      ...prevList,
      ...(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []),
    ]);
    console.log(filteredRestaurant);
  };

  const fetchData = async () => {
    console.log(buttonClick);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(filteredRestaurant);

  const onlinestatus = useOnlineStatus();

  if (onlinestatus == false)
    return <h1>Looks like you are offline! Check Your internet Connection</h1>;

  const handleFilterClick = () => {
    // Filter the restaurant data and update the state
    const filterList = filteredRestaurant.map((res) => ({
      cards: res.cards.filter((card) => card?.card?.card?.info?.avgRating >= 4),
    }));
    console.log(filteredRestaurant);
    setFilteredRestaurant(filterList);
  };

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            className="border border-solid border-black"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
              console.log(filteredRestaurant);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {buttonClick ? (
          <>
            <div className="flex flex-wrap justify-between items-center">
              {/* Render the restaurant cards based on filtered data */}
              {filteredRestaurant.map((res) => (
                <Link key={res?.info?.id} to={"restaurants/" + res?.info?.id}>
                  <div className="">
                    <RestaurantCard resData={res?.info} />
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap ">
              {/* Render the restaurant cards based on filtered data */}
              {filteredRestaurant.map((res) => (
                <Link key={res?.info?.id} to={"restaurants/" + res?.info?.id}>
                  <RestaurantCard resData={res?.info} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className=" bg-black text-white px-2"
          onClick={() => setButtonClick((prevState) => !prevState)}
        >
          Show More ⌄
        </button>
      </div>
    </div>
  );
};

export default Body;
