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
      "https://www.swiggy.com/api/seo/getListing?lat=23.20911097029021&lng=77.41920261313595"
    );
    const json = await data.json();
    console.log(json.data.success);
    console.log(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant((prevList) => [
      ...prevList,
      ...(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []),
    ]);

    setFilteredRestaurant((prevList) => [
      ...prevList,
      ...(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []),
    ]);
    console.log(filteredRestaurant);
  };

  const fetchData = async () => {
    // console.log(buttonClick);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      <div className="filter flex justify-between items-center ml-[90px] mr-[100px]">
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
      <div className="flex ml-[100px] mr-[100px] flex-wrap items-center justify-between overflow-auto">
        {buttonClick ? (
          <>
            <div className="flex flex-wrap justify-between items-center tablet:grid tablet:grid-cols-3 tablet:col-span-3 tablet:w-full tablet:overflow-y-auto tablet:overflow-x-auto">
              {/* Render the restaurant cards based on filtered data */}
              {filteredRestaurant.map((res) => (
                <Link key={res?.info?.id} to={"restaurants/" + res?.info?.id}>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex-shrink-0">
                    <RestaurantCard resData={res?.info} />
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap tablet:grid tablet:grid-cols-3 tablet:col-span-3 tablet:gap-4 tablet:overflow-y-auto tablet:overflow-x-auto laptop:grid laptop:grid-cols-4 laptop:col-span-4 laptop:gap-4 laptop:overflow-y-auto laptop:overflow-x-auto laptop:sticky">
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
