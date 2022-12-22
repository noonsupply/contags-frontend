import MainNavigator from "./navigation/MainNavigator";
import HomeScreen from "./screens/HomeScreen";

import users from "./reducers/users";
import contacts from "./reducers/contacts";
import HomeLoadContact from "./screens/HomeLoadContact";
import ExempleModal from "./screens/ExempleModal";
import ExempleSearchBar from "./screens/ExempleSearchBar";

import TagsDefinition from "./components/TagsDefinition";
import SplashScreen from "./screens/SplashScreen";
import MailScreen from "./screens/MailScreen";
import ProfileCreation from "./screens/ProfileCreation";
import TagCreation from "./screens/TagCreation";
import ContactAddManually from "./screens/ContactAddManually";
import HomeRechercheScreen from "./screens/HomeRechercheScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

/* const store = configureStore({
  reducer: { users, contacts },
});
 */

export default function App() {
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
