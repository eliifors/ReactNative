import React from "react";

import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";

import { UsersStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          width: 200,
        },
      }}
      // <drawerContent={()=> <DrawerContent />}
      initialRouteName="UsersDrawer"
    >
      <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
      <Drawer.Screen name="UsersDrawer" component={UsersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
