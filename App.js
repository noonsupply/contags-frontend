import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import users from "./reducers/users";
import contacts from "./reducers/contacts";
import Brouillon from "./screens/Brouillon";
import ExempleModal from "./screens/ExempleModal";
import ExempleSearchBar from "./screens/ExempleSearchBar";
import HomeLoadContact from "./screens/HomeLoadContact";

import TagsDefinition from "./components/TagsDefinition";
import SplashScreen from "./screens/SplashScreen";
import MailScreen from "./screens/MailScreen";
import ProfileCreation from "./screens/ProfileCreation";
import TagCreation from "./screens/TagCreation";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator />
    {/* <ExempleModal /> */}
    {/* <ExempleSearchBar /> */}
     {/* <Brouillon />  */}
    {/* <HomeLoadContact /> */}
    </Provider>
  );
}
