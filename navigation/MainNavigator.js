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
import HomeLoadContact from "../screens/HomeLoadContact";
import ModalSetting from "../screens/ModalSetting";
import HomeRechercheScreen from "../screens/HomeRechercheScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SpashScreen">
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
          name="ProfileCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={ProfileCreation}
        />
        <Stack.Screen
          name="TagCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={TagCreation}
        />

        <Stack.Screen
          name="HomeLoadContact"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeLoadContact}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="ContactScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={ContactScreen}
        />

        {/* <Stack.Screen
          name="ModalSetting"
          options={{ animationEnabled: true, header: () => null }}
          component={ModalSetting}
        /> */}
        {/* <Stack.Screen
          name="HomeRechercheScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeRechercheScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
