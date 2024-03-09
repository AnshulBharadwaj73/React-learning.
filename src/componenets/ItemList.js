import { useDispatch } from "react-redux";
import { CDN } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border-b-2 border-gray-200 text-left "
        >
          <div className="w-9/12">
            <div className=" font-medium">
              <span>{item.card.info.name}</span>
            </div>
            <span>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className=" text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className=" absolute">
              <button className="p-2 mx-16 bg-white shadow-lg ">ADD</button>
            </div>
            <img
              src={CDN + item.card.info.imageId}
              className=" w-32 md:w-32 lg:w-48 box-border "
            />
          </div>
          <div className="flex-1 relative overflow-hidden">
            {/* <img
              className="w-full h-full object-cover"
              src={CDN + item.card.info.imageId}
              alt="Your Image"
            />  */}

            {/* <!-- Button at the bottom --> */}
            <button
              className="absolute bottom-2 left-4 right-4 bg-black text-center text-white px-4 py-2 rounded"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
