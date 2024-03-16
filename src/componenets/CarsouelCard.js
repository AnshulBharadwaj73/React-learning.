import { CDN } from "../utils/constant";

const CarsouelCard = (props) => {
  const { responseData } = props;
  console.log(responseData);

  return (
    <div className="">
      <img
        className="object-center mr-5 p-2 h-full hover:cursor-pointer"
        src={CDN + responseData?.imageId}
      />
    </div>
  );
};

export default CarsouelCard;
