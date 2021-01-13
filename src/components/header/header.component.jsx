import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import headerStyles from "./header.styles.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser = {} }) => {
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
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header;
