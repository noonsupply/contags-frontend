import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeLoadContact from './screens/HomeLoadContact'
import MainNavigator from './navigation/MainNavigator'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';

const store = configureStore({
  reducer: { users },
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
  },
  
 
});