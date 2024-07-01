import "./checkOutItem.style.scss";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const CheckOutItem = (props)=>{
    const {cartItem } = props;
    const {cartItems ,  addItemToCart , decrementOfItem , removalOfItem } = useContext(CartContext);
    const {id , price , name , imageUrl , quantity} = cartItem;
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span onClick={() => decrementOfItem(cartItem)} className="decrement">{"<"}</span>
            <span className="quantity">{quantity}</span>
            <span onClick={() => addItemToCart(cartItem)} className="increment">{">"}</span>
            <span className="price">{price}</span>
            <span onClick={() => removalOfItem(cartItem)} className="remove-button">X</span>
        </div>
    );
}

export default CheckOutItem;