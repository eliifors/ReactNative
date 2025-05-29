import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useCounter } from "../context/CounterContext";

import useStore from "../store/useStore";

const CounterWithZustand = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={increase} />
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

export default CounterWithZustand;
