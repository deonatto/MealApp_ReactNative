import React, { useLayoutEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {addFavorite, removeFavorite} from '../store/Favorites'

const MealDetailScreen = ({ route, navigation }) => {
  //get list of favorite meals
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  //find meal with mealId
  const meal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const favoritesStatusHandler = () => {
    if(mealIsFavorite){
      dispatch(removeFavorite({id: mealId}));
    }else{
      dispatch(addFavorite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" onPress={favoritesStatusHandler} />;
      },
    });
  }, [navigation, favoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={{ color: "white" }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text="Ingredients" />
          {meal.ingredients.map((ingredient, index) => (
            <List key={index} text={ingredient} />
          ))}
          <Subtitle text="Steps" />
          {meal.steps.map((step, index) => (
            <List key={index} text={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
