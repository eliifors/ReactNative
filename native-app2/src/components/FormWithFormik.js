import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { Formik, useFormik } from "formik";
import Validations from "./Validations";

const FormWithFormik = () => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Validations,
    });

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange("username")}
          onBlur={handleBlur("username")}
        />
        {errors.username && touched.username && (
          <Text style={{ color: "red" }}>{errors.username}</Text>
        )}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
        />
        {errors.email && touched.email && (
          <Text style={{ color: "red" }}>{errors.email}</Text>
        )}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
        />
        {errors.password && touched.password && (
          <Text style={{ color: "red" }}>{errors.password}</Text>
        )}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="Password Confirm"
          secureTextEntry={true}
          value={values.passwordConfirm}
          onChangeText={handleChange("passwordConfirm")}
          onBlur={handleBlur("passwordConfirm")}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <Text style={{ color: "red" }}>{errors.passwordConfirm}</Text>
        )}
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
