import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Form = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value="test" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 5,
    width: "100%",
    fontSize: 20,
  },
});

export default Form;
