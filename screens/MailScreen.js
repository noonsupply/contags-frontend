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
      dispatch(updateEmailMain(email));
      //début fetch pour vérification de l'adresse mail
      fetch(`${BACKEND_ADDRESS}/users/`)
<<<<<<< HEAD
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
=======
        .then((response) => response.json())
        .then((data) => {
          const found = data.users.find((item) => item.emailMain === email);
          if (found) {
            navigation.navigate("SignInPonctuelScreen");
          } else {
            navigation.navigate("PasswordScreen");
          }
        });
>>>>>>> 84a49179e51102adb300ee29ced5025207f41d02

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
    <SafeAreaView style={styles.sav}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <KeyboardAvoidingView
        //  behavior="position"
        style={styles.kav}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
          ></Image>
        </View>

        <View style={styles.mainContainerWithLogo}>
          <Text style={styles.textOverInput}>
            Saisissez votre adresse mail personnel
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({

//   sav: {
//     flex: 1,
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//   },

//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   divImage: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: "20%",
//   },

//   logo: {
//     width: "80%",
//     height: "30%",
//     top: "40%",
//   },
//   inputText: {
//     marginTop: "30%",
//     marginLeft: "10%",
//     marginRight: "10%",
//   },
//   text: {
//     color: "#0031B8",
//   },
//   input: {
//     borderRadius: 5,
//     borderColor: "#0031B8",
//     borderWidth: 1,
//     color: "#5A5A5F",
//     height: 45,
//     paddingHorizontal: 15,
//   },
//   caseButton: {
//     marginLeft: "80%",
//   },
//   button2: {
//     backgroundColor: "#0031b8",
//     height: 50,
//     width: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 50,
//     marginBottom: "500%",
//   },
//   error: {
//     color: "#D90000",
//   },
// });
