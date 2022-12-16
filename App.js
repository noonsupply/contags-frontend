import { StyleSheet, Text, View } from "react-native";
import HomeLoadContact from "./screens/HomeLoadContact";
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { StatusBar } from "expo-status-bar";

import users from "./reducers/users";
import contacts from "./reducers/contacts";
import Brouillon from "./screens/Brouillon";

import TagsDefinition from "./components/TagsDefinition";
import SplashScreen from "./screens/SplashScreen";
import MailScreen from "./screens/MailScreen";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
      
          {/* <MainNavigator />  */}
        <Brouillon /> 
        {/* <SplashScreen /> */}
        {/* <MailScreen />  */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor : "blue",
    justifyContent : "center",
    alignItems : "center",
  },
});
