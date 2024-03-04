import { LOGO_URL } from "../utils/constant";

const Footer = () => {
  return (
    <div className=" grid grid-cols-3 content-evenly mt-3 h-[720px] w-screen bg-slate-100">
      <div className=" col-span-3">
        <img className="w-8 h-10" src={LOGO_URL}></img>
      </div>
      <div className="grid">
        <ul>
          <li className=" text-lg font-bold">Company</li>
          <li>About</li>
          <li>Foodish Smart</li>
          <li>Foodish Mart</li>
          <li>Foodish Plus</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Foodish Legal</li>
          <li>Terms and Condition</li>
          <li> Cookie</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>Suuport</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
          <li></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>We deliver to:</li>
          <li>Banglore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
