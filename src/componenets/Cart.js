import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length == 0 ? (
        "The Cart is empty. Add Item in the card"
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
