import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";

export default function App() {
  const [name, setName] = useState("Elif");
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Title text="React" color="red"></Title>
      <Title text="React Native" color="green"></Title>
      <Title text="Javascript" color="pink"></Title>

      <User data={{ id: 1, name: "Elif" }}></User>
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
});
