import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { updateEmailMain } from "../reducers/users";
import { setAdress } from "../module/adressIP";

const BACKEND_ADDRESS = setAdress();

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function MailScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      dispatch(updateEmailMain(email));
      //début fetch pour vérification de l'adresse mail
      fetch(`${BACKEND_ADDRESS}/users/`)
  .then(response => response.json())
  .then(data => {
    if(data.result){
      const found = data.users.find(item => item.emailMain === email);
      if (found) {
        navigation.navigate("SignInPonctuelScreen")
      } else {
        navigation.navigate("PasswordScreen")
      } 
    }
    
  });

  //fin fetch
    } 
  };

/*   fetch(`${BACKEND_ADDRESS}/users/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      emailMain: user.emailMain,
      password: Password1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        dispatch(updateToken(data.token));
      }
    });
  navigation.navigate("ProfileCreation");
}
}; */

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.divImage}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.inputText}>
        <Text style={styles.text}>Saisissez votre adresse mail personnel</Text>
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          onChangeText={(value) => setEmail(value)}
          value={email}
        ></TextInput>
        {emailError && (
          <Text style={styles.error}>Adresse mail non valide</Text>
        )}
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button2} onPress={() => handleSubmit()}>
          <FontAwesome color="#ffffff" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  divImage: {
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "30%",
    top: "40%",
  },
  inputText: {
    marginTop: "30%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  text: {
    color: "#0031B8",
    marginBottom: "1%",
  },
  input: {
    height: "22%",
    borderRadius: 5,
    paddingLeft: 15,
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1.5,
  },
  caseButton: {
    marginLeft: "80%",
  },
  button2: {
    backgroundColor: "#0031b8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: "500%",
  },
  error: {
    color: "#D90000",
  },
});
