import { MENU_API } from "./constant";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json?.data);
    console.log(resInfo);
    console.log(resInfo?.cards[0]?.card?.card?.info?.name);
  };
  return resInfo;
};

export default useRestaurantMenu;
