import React from "react";
import homepageStyles from "./homepage.styles.module.scss";

export const Homepage = () => {
  return (
    <div className={homepageStyles.homepage}>
      <div className={homepageStyles.directoryMenu}>
        <div className={homepageStyles.menuItem}>
          <div className={homepageStyles.content}>
            <h1 className={homepageStyles.title}>HATS</h1>
            <span className={homepageStyles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={homepageStyles.menuItem}>
          <div className={homepageStyles.content}>
            <h1 className={homepageStyles.title}>JACKETS</h1>
            <span className={homepageStyles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={homepageStyles.menuItem}>
          <div className={homepageStyles.content}>
            <h1 className={homepageStyles.title}>SNEAKERS</h1>
            <span className={homepageStyles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={homepageStyles.menuItem}>
          <div className={homepageStyles.content}>
            <h1 className={homepageStyles.title}>WOMENS</h1>
            <span className={homepageStyles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={homepageStyles.menuItem}>
          <div className={homepageStyles.content}>
            <h1 className={homepageStyles.title}>MENS</h1>
            <span className={homepageStyles.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
