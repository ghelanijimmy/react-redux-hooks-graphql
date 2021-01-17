import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import directoryStyles from "./directory.styles.module.scss";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
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
