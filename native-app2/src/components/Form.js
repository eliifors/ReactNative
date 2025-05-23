import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = () => {
    

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password Confirm"
          secureTextEntry={true}
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <Button title="Register" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "center",
  },
  item: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    fontSize: 24,
    width: "100%",
  },
});

export default Form;
