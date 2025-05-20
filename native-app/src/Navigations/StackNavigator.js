import { View, Text, StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
// screens
import HomeScreen from "../screens/Home";
import UsersScreen from "../screens/Users";
import UserDetail from "../screens/UserDetail";
import DrawerButton from "../Components/DrawerButton";

// Home Stack
const HomeStack = createNativeStackNavigator();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerLeft: () => <DrawerButton />,
        })}
      />
    </HomeStack.Navigator>
  );
}

// Users Stack
const UsersStack = createNativeStackNavigator();
function UsersStackNavigator() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}

export { HomeStackNavigator, UsersStackNavigator };
