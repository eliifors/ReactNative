import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UserDetail = ({ route }) => {
  const data = route.params;
  return (
    <View>
      <Text style={styles.text}>UserDetail</Text>
      <Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
  },
});

export default UserDetail;
