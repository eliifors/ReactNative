import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { count, setCount } = useCounter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default Counter;
