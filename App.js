import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light"/>
      <CategoriesScreen />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
