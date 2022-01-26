import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

export default function App() {
  const categoryList = [
    { id: 1, name: "Dụng cụ trượt tuyết" },
    { id: 2, name: "Quần áo trượt tuyết" },
    { id: 3, name: "Kính cũ" },
  ];

  return (
    <View>
      {/* <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
      {categoryList.map((category) => (
          <CategoryListItem key={category.id} category={category} />
        ))}
      </ScrollView> */}
      <FlatList
        data={categoryList}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
