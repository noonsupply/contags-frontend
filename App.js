import MainNavigator from "./navigation/MainNavigator";

import users from "./reducers/users";
import contacts from "./reducers/contacts";

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
