import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import users from "./reducers/users";
import contacts from "./reducers/contacts";

const store = configureStore({
  reducer: { users, contacts },
});

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
