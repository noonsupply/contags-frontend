import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import MailScreen from "../screens/MailScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ProfileCreation from "../screens/ProfileCreation";
import TagCreation from "../screens/TagCreation";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import SignInPonctuelScreen from "../screens/SignInPonctuelScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ animationEnabled: false, header: () => null }}
          component={SplashScreen}
        />
        {/* <Stack.Screen
          name="SignInPonctuelScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={SignInPonctuelScreen}
        /> */}
        <Stack.Screen
          name="MailScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={MailScreen}
        />
        <Stack.Screen
          name="PasswordScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={PasswordScreen}
        />
        <Stack.Screen
          name="ProfilCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={ProfileCreation}
        />
        <Stack.Screen
          name="TagCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={TagCreation}
        />
        <Stack.Screen
          name="Home"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ContactScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={ContactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
