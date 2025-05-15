import { View, Text, FlatList } from "react-native";
import React from "react";
import Item from "./item";

const data = [
  {
    id: 1,
    name: "Elif",
    surname: "Örs",
  },
  {
    id: 2,
    name: "Kerem",
    surname: "Tuç",
  },
  {
    id: 3,
    name: "Ali",
    surname: "Yılmaz",
  },
  {
    id: 4,
    name: "Ayşe",
    surname: "Yılmaz",
  },
  {
    id: 5,
    name: "Fatma",
    surname: "Yılmaz",
  },
  {
    id: 6,
    name: "Mehmet",
    surname: "Yılmaz",
  },
];

const UsersScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

export default UsersScreen;
