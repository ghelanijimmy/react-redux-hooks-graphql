import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import directoryStyles from "./directory.styles.module.scss";
import SECTIONS_DATA from "./directory.data";

const Directory = () => {
  const [sections] = useState([...SECTIONS_DATA]);
  return (
    <div className={directoryStyles.directoryMenu}>
      {sections.map(({ title, id, imageUrl, linkUrl, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      ))}
    </div>
  );
};

export default Directory;
