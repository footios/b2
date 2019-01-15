import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// child of BurgerBuilder
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // transform the igKey, string value, into an array
      // with as many elements as the value of the igKey
      // We use an underscore in the second map func,
      // because we don't care about the element itself,
      // since we are going to pass it to the <BurgerIngredient />
      // through 'type'.
      return [...Array(props.ingredients[igKey])].map((_, index) => (
        <BurgerIngredient key={igKey + index} type={igKey} />
      ));
    })
    .every(ing => ing.length === 0);

  if (transformedIngredients) {
    transformedIngredients = <p> Please start adding ingredients! </p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
