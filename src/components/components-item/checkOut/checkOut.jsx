import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import "./checkOut.style.scss"
import CheckOutItem from "../../checkOutItem/checkOutItem";


const CheckOut = ()=>{
    const {cartItems , cartTotal} = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem)=>{
                return(
                    <CheckOutItem cartItem={cartItem}/>
                )
            })}
            <span className="total">${cartTotal}</span>
        </div>
    );
}

export default CheckOut;