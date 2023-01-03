import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import MailScreen from "../screens/MailScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ProfileCreation from "../screens/ProfileCreation";
import TagCreation from "../screens/TagCreation";
import HomeScreen from "../screens/HomeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import ContactAddManually from "../screens/ContactAddManually";
import HomeLoadContact from "../screens/HomeLoadContact";
import SignInPonctuelScreen from "../screens/SignInPonctuelScreen";
import HomeRechercheScreen from "../screens/HomeRechercheScreen";
import ProfileAutomatedTagCreation from "../screens/ProfileAutomatedTagCreation";

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
        <Stack.Screen
          name="SignInPonctuelScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={SignInPonctuelScreen}
        />
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
          name="ProfileAutomatedTagCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={ProfileAutomatedTagCreation}
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
          name="ContactsScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={ContactsScreen}
        />

        <Stack.Screen
          name="ContactAddManually"
          options={{ animationEnabled: true, header: () => null }}
          component={ContactAddManually}
        />

        <Stack.Screen
          name="HomeRechercheScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeRechercheScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
