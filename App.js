import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeLoadContact from './screens/HomeLoadContact';
import ProfileCreation from './screens/ProfileCreation';
import TagCreation from './screens/TagCreation';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';

const store = configureStore({
  reducer: { users },
 });
 

export default function App() {
  return (
    <Provider store={store}>
    <ProfileCreation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
