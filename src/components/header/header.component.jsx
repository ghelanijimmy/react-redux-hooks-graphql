import React from "react";
import { Link } from "react-router-dom";
import headerStyles from "./header.styles.module.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
