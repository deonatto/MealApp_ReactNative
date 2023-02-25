import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  //get favorite meals
  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsIds.includes(meal.id);
  });

  return <MealsList items={favoriteMeals}/>;
};

export default FavoritesScreen;
