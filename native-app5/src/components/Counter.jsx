import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useMemo, useCallback } from "react";
import React from "react";
import Header from "./Header";
import User from "./User";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmet");

  console.log("Counter component re-rendered");

  const user = useMemo(() => {
    console.log("User object created");
    return {
      id: 1,
      name: "John Doe",
    };
  }, []);

  const increment = useCallback(
    (amount) => {
      setCount((prev) => prev + amount);
    },
    [count]
  );

  return (
    <View style={styles.container}>
      <Header increment={increment} />

      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={() => increment(1)} />
      <Button title="İsmi Değiştir" onPress={() => setName("Elif")} />

      <User user={user} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default Counter;
