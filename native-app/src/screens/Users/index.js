import { View, Text, FlatList } from "react-native";
import React, { use } from "react";
import Item from "./item";
import { useEffect, useState } from "react";

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
      />
    </View>
  );
};

export default UsersScreen;
