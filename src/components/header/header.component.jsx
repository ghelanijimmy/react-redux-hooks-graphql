import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartHidden = useSelector(selectIsCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!isCartHidden && <CartDropdown />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header;
