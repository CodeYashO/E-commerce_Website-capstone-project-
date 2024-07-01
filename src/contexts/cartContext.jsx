import { useEffect } from "react";
import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  console.log(existingCartItem);

  if (existingCartItem) { 
    // return cartItems.map((cartItem) =>
    //   cartItem.id === productToAdd.id
    //     ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //     : cartItem
    // );
    existingCartItem.quantity = existingCartItem.quantity + 1; 

    return [...cartItems ]
  }

  // if New Product Is Added
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrement = (cartItems, productTodecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productTodecrease.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productTodecrease.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1 > 0 ? cartItem.quantity - 1 : 1,
          }
        : cartItem
    );
  };
};

const removal = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id != productToRemove.id);
};

export const CartContext = createContext({
  show: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  decrementOfItem: () => {},
  removalOfItem: () => {},
  setshow: () => null,
});

export const CartProvider = ({ children }) => {
  const [show, setshow] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [cartQuantity, setcartQuantity] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setcartQuantity(newCartQuantity);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,  
      0
    );
    setcartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    setcartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementOfItem = (productTodecrease) => {
    console.log(productTodecrease);
    setcartItems(decrement(cartItems, productTodecrease));
  };

  const removalOfItem = (productToRemove) => {
    setcartItems(removal(cartItems, productToRemove));
  };

  const value = {
    show,
    setshow,
    addItemToCart,
    cartItems,
    cartQuantity,
    decrementOfItem,
    removalOfItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
