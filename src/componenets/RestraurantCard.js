import { CDN } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  //   const { name, cuisines } = card?.card?.info;
  //   console.log(name, cuisines);
  //   console.log(resData.resData.cards[3].card.card.info);
  return (
    <div className="m-4 p-4 w-[225px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-48 h-48"
        alt="meghna-food"
        src={CDN + resData?.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
        {resData?.name}
      </h3>
      <h4 className="overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
        {resData?.cuisines.join("-")}
      </h4>
      <h4>{"Avg Rating " + resData?.avgRating}</h4>
      <h4>{resData?.sla?.deliveryTime + " min"}</h4>
    </div>
  );
};

export default RestaurantCard;