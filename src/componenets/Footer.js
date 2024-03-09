import { useEffect } from "react";
import { LOGO_URL } from "../utils/constant";

const Footer = () => {
  const lat = 12.960059122809971;
  const lon = 77.57337538383284;
  useEffect(() => {
    fetchData(12.960059122809971, 77.57337538383284);
  }, []);
  const fetchData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      console.log(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className=" grid   content-evenly mt-3 h-[720px] laptop:h-[450px] w-screen bg-slate-100">
      <div className=" grid grid-cols-2 col-span-2 laptop:grid-cols-3 gap-6 ml-60">
        <div className="col-span-2 laptop:col-span-3 ">
          <div className="flex font-bold text-xl">
            <img className="w-8 h-8" src={LOGO_URL}></img>
            <p className="pl-2">Foodish</p>
          </div>

          <div>
            <p> © 2024 Foodish PVT LTD</p>
          </div>
        </div>
        <div className="">
          <ul className=" leading-[30px]">
            <li className=" text-lg font-bold">Company</li>
            <li>About</li>
            <li>Foodish Smart</li>
            <li>Foodish Mart</li>
            <li>Foodish Plus</li>
          </ul>
        </div>
        <div>
          <ul className=" leading-[30px]">
            <li className=" text-lg font-bold">Foodish Legal</li>
            <li>Terms and Condition</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <ul className=" leading-[30px]">
            <li className=" text-lg font-bold">Contact Us</li>
            <li>Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul className=" leading-[30px]">
            <li className=" text-lg font-bold laptop:grid-cols-subgrid col-span-2">
              We deliver to:
            </li>
            <li
              onClick={() => fetchData(12.960059122809971, 77.57337538383284)}
            >
              Banglore
            </li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
