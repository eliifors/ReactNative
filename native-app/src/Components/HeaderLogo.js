import { View, Text, Image } from "react-native";
import React from "react";

const HeaderLogo = () => {
  return (
    <Image
      style={{ width: 40, height: 40, marginLeft: 90 }}
      source={require("../../assets/logo.png")}
    />
  );
};

export default HeaderLogo;
