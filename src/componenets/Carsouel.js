import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Carsouel = () => {
  const [carsouel, setCarsouel] = useState();

  useEffect(() => {
    console.log("useffect 3 called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
    // console.log(json.data);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
  };
  return (
    <div>
      <div>anshul, whats on your mind?</div>
      <div></div>
    </div>
  );
};

export default Carsouel;
