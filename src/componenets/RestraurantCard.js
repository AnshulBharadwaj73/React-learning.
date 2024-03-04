import { CDN } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  //   const { name, cuisines } = card?.card?.info;
  //   console.log(name, cuisines);
  //   console.log(resData.resData.cards[3].card.card.info);
  return (
    <div className="relative m-4 p-4 w-[240px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-[230px] h-48"
        alt="meghna-food"
        src={CDN + resData?.cloudinaryImageId}
      />
      <div className="absolute bottom-20 top-[177px] left-3 right-0 text-slate-100 p-2">
        <h3 className="font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
          {resData?.aggregatedDiscountInfoV3?.header != undefined
            ? resData?.aggregatedDiscountInfoV3?.header +
              " " +
              resData?.aggregatedDiscountInfoV3?.subHeader
            : ""}
        </h3>
      </div>
      <div className="">
        <h3 className="font-bold text-inherit overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
          {resData?.name}
        </h3>
      </div>
      <h4 className="overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
        {resData?.cuisines.join("-")}
      </h4>
      <h4>{"⭐️ " + resData?.avgRating}</h4>
      <h4>{resData?.areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
