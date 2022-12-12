import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MailScreen from "./screens/MailScreen";
import PasswordScreen from "./screens/PasswordScreen";
import users from "./reducers/users";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { users },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Mail" component={MailScreen} />
          <Stack.Screen name="Password" component={PasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
