import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/usercontext";
import { SignOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart_Icon/cart_icon";
import CartDropDrown from "../../components/cart_dropdown/cart_dropdown";
import { CartContext } from "../../contexts/cartContext";
import { ContentContext } from "../../contexts/cartInsideContext";
import Home from "../home/home.component";

const Navigation = () => {
  let { content } = useContext(ContentContext);
  console.log(content);

  const { currentUser, dispatch } = useContext(UserContext);
  console.log(currentUser);

  const signOuthandler = async () => {
    const response = await SignOutUser();
    console.log(response);
    // setcurrentUser(null);
    dispatch({type : "REMOVE_CURRENT_USER" , data : null});
  };

  // const {show} = useContext(CartContext);
  const { show } = useContext(CartContext);
  console.log(show);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            {" "}
            <Crownlogo className="logo" />{" "}
          </div>
        </Link>

        <div className="user-name">{ currentUser ? `Welcome ${currentUser.displayName}` : ""}</div>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>

          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOuthandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN
            </Link>
          )}

          <CartIcon contentQuantity={content.length} />
          {show ? <CartDropDrown /> : ""}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
