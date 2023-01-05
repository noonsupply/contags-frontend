import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { updateEmailMain } from "../reducers/users";
import { setAdress } from "../module/adressIP";
import { styles } from "../assets/Style";

const BACKEND_ADDRESS = setAdress();

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function MailScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      //début fetch pour vérification de l'adresse mail
      fetch(`${BACKEND_ADDRESS}/users/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(updateEmailMain(email));
            const found = data.users.find((item) => item.emailMain === email);
            if (found) {
              navigation.navigate("SignInPonctuelScreen");
            } else {
              navigation.navigate("PasswordScreen");
            }
          }
        }); //fin fetch
    }
    // si l'email n'est pas valide on affiche un message d'erreur
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(true);
    }
  };

  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/contags-HR-blue-logo-transparent-background.png")}
              ></Image>
            </View>

            <View style={styles.mainContainerWithLogo}>
              <Text style={styles.textOverInput}>
                Veuillez saisir une adresse mail personnelle :
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Email"}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="email"
                onChangeText={(value) => setEmail(value)}
                value={email}
              ></TextInput>
              {emailError && (
                <Text style={styles.alertMsg}>Adresse mail non valide</Text>
              )}
            </View>

            <View style={styles.navigationContainerSubmitOnly}>
              <TouchableOpacity
                style={styles.navigationBtn}
                onPress={() => handleSubmit()}
              >
                <FontAwesome color="#ffffff" name="chevron-right" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
