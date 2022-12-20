import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTogglePasswordVisibility } from "../module/useTogglePasswordVisibility";
import { useTogglePasswordVisibility2 } from "../module/useTogglePasswordVisibility2";
import { updateToken } from "../reducers/users";
import HomeScreen from "./HomeScreen";
import { checkBody } from "../module/checkbody";
import { setAdress } from "../module/adressIP";

const BACKEND_ADDRESS = setAdress();

export default function SignInPonctuleScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [Password1, setPassword1] = useState("");
  const [emailMain, setEmailMain] = useState();

  // const handleSubmit = () => {
  //   if (Password1 === PasswordBDD) {
  //     dispatch();
  //     navigation.navigate("Home");
  //   } else {
  //     Alert.alert("Erreur", "Mauvais mot de passe");
  //   }
  // };

  /*Fonction de hackatweet */
  const handleSubmit = () => {
    // on verifie si les champs sont remplis
    if (
      checkBody({ emailMain: user.emailMain, password: Password1 }, [
        "password",
      ])
    ) {
      // on utilise la route pour enregistrer l'utilisateur
      fetch(`${BACKEND_ADDRESS}/users/signin`, {
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
            navigation.navigate("Home");
          }
        });
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.divImage}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View>
        <Text style={styles.text}>
          Cela fait longtemps qu’on vous a pas vu ?
        </Text>
      </View>
      <View style={styles.pass}>
        <Text style={styles.text}>Saisissez votre mot de passe</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={Password1}
            onChangeText={(text) => {
              setPassword1(text);
            }}
          />
          <Pressable
            style={styles.iconDivEye}
            onPress={handlePasswordVisibility}
          >
            <FontAwesome name={rightIcon} size={22} color="#0031b8" />
          </Pressable>
        </View>
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
  pass: {
    marginTop: "20%",
  },
  passwordContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  text: {
    color: "#0031B8",
    marginLeft: "10%",
    marginRight: "5%",
  },
  input: {
    width: "70%",
    height: 35,
    marginLeft: "10%",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    borderColor: "#0031B8",
    borderWidth: 1.5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  iconDivEye: {
    borderColor: "#0031B8",
    borderColor: "#0031B8",
    borderWidth: 1.5,
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  caseAlert: {
    color: "#000000",
  },
  icon: {
    marginLeft: 50,
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: "100%",
  },

  button2: {
    backgroundColor: "#0031B8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "80%",
  },
});
