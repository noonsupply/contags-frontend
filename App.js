import MainNavigator from "./navigation/MainNavigator";

import users from "./reducers/users";
import contacts from "./reducers/contacts";

import TagsDefinition from "./components/TagsDefinition";
import SplashScreen from "./screens/SplashScreen";
import MailScreen from "./screens/MailScreen";
import ProfileCreation from "./screens/ProfileCreation";
import TagCreation from "./screens/TagCreation";
import ContactAddManually from "./screens/ContactAddManually";
import HomeRechercheScreen from "./screens/HomeRechercheScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

//Persistore début import
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//Persistore fin import

//Persistore début fonction
const reducers = combineReducers({ users, contacts });
const persistConfig = { key: "applicationName", storage: AsyncStorage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
