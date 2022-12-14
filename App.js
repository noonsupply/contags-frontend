import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeLoadContact from './screens/HomeLoadContact'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';
import contacts from './reducers/contacts';
import Brouillon from './screens/Brouillon';
import TagsInput from './components/TagsInput';

const store = configureStore({
  reducer: { users, contacts},
 });
 

export default function App() {
  const selectedTags = tags => {
    console.log(tags);
  };

  return (
    <Provider store={store}>
    <View style={styles.container}>

    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0031B8",
    justifyContent :"center",
    alignItems : 'center',
   // display: "flex",
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