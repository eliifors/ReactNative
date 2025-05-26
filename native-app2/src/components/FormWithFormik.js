import { View, StyleSheet } from "react-native";
import React from "react";
import { Formik, useFormik } from "formik";
import Validations from "./Validations";
import { Box, Button, FormControl, Input, Stack } from "native-base";
import { WarningOutlineIcon } from "native-base";

const FormWithFormik = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (values.email === "elif@hotmail.com") {
        return bag.setErrors({
          email: "Bu e-posta adresi zaten kayıtlı.",
        });
      }

      bag.resetForm();

      console.log(values);
      console.log(bag);
    },
    validationSchema: Validations,
  });

  return (
    <View style={styles.container}>
      <Box alignItems="center" marginBottom={4}>
        <FormControl isInvalid={errors.username && touched.username} w="100%">
          <FormControl.Label>Username</FormControl.Label>
          <Input
            placeholder="Enter Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            editable={!isSubmitting}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.username}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      ;
      <Box alignItems="center" marginBottom={4}>
        <FormControl isInvalid={errors.email && touched.email} w="100%">
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="Enter E-mail"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            editable={!isSubmitting}
            keyboardType="email-address"
            autoCapitalize="none"
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      ;
      <Box alignItems="center" marginBottom={4}>
        <FormControl isInvalid={errors.password && touched.password} w="100%">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Enter Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            editable={!isSubmitting}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.password}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      ;
      <Box alignItems="center" marginBottom={4}>
        <FormControl
          isInvalid={errors.passwordConfirm && touched.passwordConfirm}
          w="100%"
        >
          <FormControl.Label>Password Confirm</FormControl.Label>
          <Input
            placeholder="Enter Confirm Password"
            secureTextEntry={true}
            value={values.passwordConfirm}
            onChangeText={handleChange("passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")}
            editable={!isSubmitting}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.passwordConfirm}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Stack
        mb="2.5"
        mt="1.5"
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
        mx={{
          base: "auto",
          md: "0",
        }}
      >
        <Button
          title="Register"
          onPress={handleSubmit}
          isLoading={isSubmitting}
          isLoadingText="Gönderiliyor..."
          disabled={isSubmitting}
          size="sm"
          variant="subtle"
          colorScheme="secondary"
        >
          SECONDARY
        </Button>
      </Stack>
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
