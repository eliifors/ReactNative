import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const data = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Active Theme : {data}</Text>
    </View>
  );
};

export default About;
