import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./src/screens/Home";
import UsersScreen from "./src/screens/Users";
import UserDetail from "./src/screens/UserDetail";
import HeaderLogo from "./src/Components/HeaderLogo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Anasayfa",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info right"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info left"
              />
            ),
            headerTitle: (props) => <HeaderLogo {...props} />,
          }}
        />

        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: "Kullanıcılar",
            headerRight: () => (
              <Button onPress={() => alert("This is a button!")} title="Info" />
            ),
          }}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
