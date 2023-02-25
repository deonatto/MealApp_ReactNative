import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/data";

const MealsOverviewScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;

  //get all meals that belgons to this category
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  //useLayoutEffect to load bar title
  useLayoutEffect(() => {
    //find category title
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === categoryId;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);
  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
