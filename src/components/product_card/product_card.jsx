import "../product_card/product_card.scss";
// import CartDropDownContent from "../cart_dropdown/cart_dropdown_content";
import { useContext } from "react";
import { ContentContext } from "../../contexts/cartInsideContext";
import { CartContext } from "../../contexts/cartContext";

const ProductCard = (props) => {
  const { addItemToCart } = useContext(CartContext);
  let { product, count } = props;
  let { imageUrl, name, id, price } = product;

  
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <button onClick={addProductToCart}>
        <span className="btn-content">Add To Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
