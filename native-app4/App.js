import { Button, StyleSheet, Text, View } from "react-native";
import Counter from "./src/components/Counter";
import { CounterContextProvider } from "./src/context/CounterContext";
import React from "react";
import CounterWithZustand from "./src/components/CounterWithZustand";

export default function App() {
  return (
    <CounterContextProvider>
      <View style={styles.container}>
        {/* <Counter /> */}
        <CounterWithZustand />
      </View>
    </CounterContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
