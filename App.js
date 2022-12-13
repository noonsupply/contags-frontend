import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MailScreen from "./screens/MailScreen";
import PasswordScreen from "./screens/PasswordScreen";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeLoadContact from "./screens/HomeLoadContact";

import users from "./reducers/users";
import contacts from "./reducers/contacts";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  console.log("one");
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeLoadContact />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0031B8",
    display: "flex",
  },
  logo: {
    width: 293,
    height: 102,
    left: 50,
    top: 96,
  },
  inputText: {
    marginTop: 250,
    marginLeft: 25,
    marginRight: 25,
  },
  text: {
    color: "#ffffff",
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
  },
  icon: {
    color: "#ffffff",
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 320,
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  button2: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
