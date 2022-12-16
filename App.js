import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { StatusBar } from "expo-status-bar";

import users from "./reducers/users";
import contacts from "./reducers/contacts";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
