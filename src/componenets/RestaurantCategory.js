import { useState, useRef } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data.itemCards);

  const handleClick = (e) => {
    e.preventDefault();
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className=" ">⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
