import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { Formik, useFormik } from "formik";

const FormWithFormik = () => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange("username")}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          value={values.email}
          onChangeText={handleChange("email")}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={handleChange("password")}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password Confirm"
          secureTextEntry={true}
          value={values.passwordConfirm}
          onChangeText={handleChange("passwordConfirm")}
        />
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
    borderColor: "#999",
    padding: 10,
    fontSize: 24,
    width: "100%",
  },
});

export default FormWithFormik;
