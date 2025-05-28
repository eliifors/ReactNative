import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Item = ({ user }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.text}>{user.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    backgroundColor: "#D8D8D8",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});

export default Item;
