import "./cart_dropdown.scss";
import CartDropDownContent from "./cart_dropdown_content";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const CartDropDrown = () => {
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const goToCheckOutHandler = () => {
    Navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartDropDownContent key={item.id} cartItem={item} />
        ))}
      </div>

      <button onClick={goToCheckOutHandler} className="cart_btn">
        Go To Checkout
      </button>
    </div>
  );
};

export default CartDropDrown;
