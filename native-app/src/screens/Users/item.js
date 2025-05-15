import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>
          {item.name} {item.surname}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "pink",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 24,
  },
});

export default Item;
