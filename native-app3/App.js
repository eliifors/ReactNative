import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import ThemeContext from "./src/context/ThemeContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
