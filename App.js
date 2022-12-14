import { StyleSheet, Text, View } from "react-native";
import HomeLoadContact from "./screens/HomeLoadContact";
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';
import contacts from './reducers/contacts';

import Brouillon from './screens/Brouillon';
import TagsInput from './components/TagsInput';

import { StatusBar } from "expo-status-bar";


const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <MainNavigator /> */}
        <Brouillon />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
