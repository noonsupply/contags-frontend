import MainNavigator from "./navigation/MainNavigator";
import HomeScreen from "./screens/HomeScreen";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

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
import HomeRechercheScreen from "./screens/HomeRechercheScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
