import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = ({ item }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
