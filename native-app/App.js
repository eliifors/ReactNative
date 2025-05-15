import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export default function App() {
  const [name, setName] = useState("Elif");
  const [age, setAge] = useState(22);

  return (
    <SafeAreaView style={styles.container}>
      <Text>İsim: {name}</Text>
      <Text>Yaş: {age}</Text>
      <Button title="İsmi Değiştir" onPress={() => setName("Kerem")} />
      <Button title="Yaşı Değiştir" onPress={() => setAge(25)} />
    </SafeAreaView>
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
