import React from "react";
import Directory from "../../components/directory/directory.component";
import homepageStyles from "./homepage.styles.module.scss";

export const Homepage = () => {
  return (
    <div className={homepageStyles.homepage}>
      <Directory />
    </div>
  );
};
export default Homepage;
