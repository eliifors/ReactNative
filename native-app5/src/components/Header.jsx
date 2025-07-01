import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Header = ({ increment }) => {
  const arr = new Array(5).fill().map(() => Math.floor(Math.random() * 10));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <Text>{JSON.stringify(arr)}</Text>
      <Button title="Arttır" onPress={() => increment(5)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#e0f7fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default React.memo(Header);
