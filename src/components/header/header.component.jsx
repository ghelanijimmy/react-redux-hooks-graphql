import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import headerStyles from "./header.styles.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartHidden = useSelector(selectIsCartHidden);

  return (
    <div className={headerStyles.header}>
      <Link to="/" className={headerStyles.logoContainer}>
        <Logo className={headerStyles.logo} />
      </Link>
      <div className={headerStyles.options}>
        <Link to="/shop" className={headerStyles.option}>
          SHOP
        </Link>
        <Link to="/shop" className={headerStyles.option}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={headerStyles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={headerStyles.option} to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!isCartHidden && <CartDropdown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header;
