import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
      <StatusBar style="auto" />

      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>React Native</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={(styles.text, styles.text1)}>React</Text>
      </View>

      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>Javascript</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    marginBottom: 20,
  },
  box1: {
    backgroundColor: "brown",
  },
  box2: {
    backgroundColor: "purple",
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "gray",
  },
  text1: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "pink",
  },
});
