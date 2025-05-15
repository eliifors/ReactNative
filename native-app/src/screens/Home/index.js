import * as React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Kullanıcılar"
        onPress={() => navigation.navigate("Users")}
      ></Button>
    </View>
  );
}

export default HomeScreen;
