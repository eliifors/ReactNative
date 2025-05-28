import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={[
          { id: 1, name: "Elif" },
          { id: 2, name: "Kerem" },
          { id: 3, name: "Melisa" },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default List;
