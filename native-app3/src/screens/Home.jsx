import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Home = ({ navigation }) => {
  const data = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Active Theme : {data}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Home;
