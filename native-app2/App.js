import { StyleSheet, Text, View } from "react-native";
import Form from "./src/components/Form";
import FormWithFormik from "./src/components/FormWithFormik";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Form /> */}
        <FormWithFormik />
      </View>
    </NativeBaseProvider>
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
