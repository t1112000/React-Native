import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SkiiImage from "../assets/ski.png";

export default CategoryListItem = (porps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryListItem !!</Text>
      <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#Fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
});
