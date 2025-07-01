import { StyleSheet, View } from "react-native";
import Counter from "./src/components/Counter";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
