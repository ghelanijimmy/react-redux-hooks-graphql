import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import itemStyles from "./collection-item.styles.module.scss";

const CollectionItem = ({ item, addClass }) => {
  const { name, price, imageUrl } = item;
  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className={`${itemStyles.collectionItem} ${addClass}`}>
      <div
        className={itemStyles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={itemStyles.collectionFooter}>
        <span className={itemStyles.name}>{name}</span>
        <span className={itemStyles.price}>{price}</span>
      </div>

      <CustomButton
        addClass={itemStyles.customButton}
        inverted
        onClick={handleAddItem}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};
CollectionItem.propTypes = {};

export default CollectionItem;
