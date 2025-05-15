import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./src/screens/Home";
import UsersScreen from "./src/screens/Users";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen name="Home" component={HomeScreen} options={"Anasayfa"} />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={"Kullanıcılar"}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
