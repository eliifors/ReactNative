import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { use } from "react";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  // const handleSubmit = () => {
  //   console.log({ username, email, password, passwordConfirm });
  // };

  const handleSubmit = () => {
    if (!form.username) {
      alert("Username is required");
      return;
    }
    if (!form.email) {
      alert("E-mail is required");
      return;
    }
    if (!form.password) {
      alert("Password is required");
      return;
    }
    if (form.password !== form.passwordConfirm || !form.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    console.log({
      username: form.username,
      email: form.email,
      password: form.password,
      passwordConfirm: form.passwordConfirm,
    });
  };

  const handleChange = (text, input) => {
    setForm((prev) => ({
      ...prev,
      [input]: text,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={form.username}
          onChangeText={(text) => handleChange(text, "username")}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          value={form.email}
          onChangeText={(text) => handleChange(text, "email")}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={form.password}
          onChangeText={(text) => handleChange(text, "password")}
        ></TextInput>
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password Confirm"
          secureTextEntry={true}
          value={form.passwordConfirm}
          onChangeText={(text) => handleChange(text, "passwordConfirm")}
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
