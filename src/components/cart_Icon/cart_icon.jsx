import { ReactComponent as ShoppingIcon } from "../../assets/cart_icon.svg";
import "./cart_icon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ContentContext } from "../../contexts/cartInsideContext";
import { createBrowserHistory } from "@remix-run/router";
import CheckOut from "../components-item/checkOut/checkOut";

const CartIcon = (props) => {
  const { show, setshow , cartItems , cartQuantity } = useContext(CartContext);
  let { content , setcontent} = useContext(ContentContext);
  console.log(show);
  console.log(content);

  const ClickHandler = () => {
    setshow(!show);
  };
  
  console.log(cartItems);
  console.log(cartQuantity);

  return (
    <div className="cart-icon-container" onClick={ClickHandler} >
      <ShoppingIcon className="shopping-icon" />

      <span className="item-count" >{cartQuantity} </span>
    </div>
  );
};

export default CartIcon;
