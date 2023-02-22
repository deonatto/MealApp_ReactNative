import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/data";

const MealsOverviewScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;

  //get all meals that belgons to this category
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    //find category title
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === categoryId;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
