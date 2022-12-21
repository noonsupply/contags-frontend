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
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTogglePasswordVisibility } from "../module/useTogglePasswordVisibility";
import { useTogglePasswordVisibility2 } from "../module/useTogglePasswordVisibility2";
import { updateToken } from "../reducers/users";
import { setAdress } from "../module/adressIP";

const BACKEND_ADDRESS = setAdress();

export default function PasswordScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);
  const handleReturn = () => {
    navigation.navigate("MailScreen");
  };

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();
  const [Password1, setPassword1] = useState(null);
  const [Password2, setPassword2] = useState(null);
  const [onClick, setOnClick] = useState(false);

  const regexMdp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;

  function PwdIdenticalAlert() {
    if (Password1 === Password2 && regexMdp.test(Password2)) {
      return (
        <View style={styles.Info}>
          <Text style={styles.textInfoV}>Mots de passe identiques</Text>
          <Entypo name="check" size={20} color="#21AC14" style={styles.icon} />
        </View>
      );
    }
  }

  function PwdDifferentAlert(props) {
    if (Password1 !== Password2 && props.onceClicked) {
      return (
        <View style={styles.Info}>
          <Text style={styles.textInfoX}>Mots de passe différents</Text>
          <Entypo name="cross" size={25} color="#D90000" style={styles.icon} />
        </View>
      );
    }
  }
  function PwdFormatAlert(props) {
    if (!regexMdp.test(Password1) && props.onceClicked) {
      return (
        <View style={styles.Info}>
          <Text style={styles.textInfoX}>
            Votre mot de passe doit contenir 1 majuscule, 1 minuscule, 1
            caractère spéciale et plus de 7 caractères.
          </Text>
        </View>
      );
    }
  }
  const handleSubmit = () => {
    setOnClick(true);

    if (Password1 === Password2 && regexMdp.test(Password1)) {
      console.log("route", user);
      fetch(`${BACKEND_ADDRESS}/users/create`, {
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
            // console.log("fin");
            navigation.navigate("ProfileCreation");
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
          Pour finaliser votre inscription, veuillez saisir un mot de passe
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
        <Text style={styles.text}>Saisir de nouveau</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility2}
            value={Password2}
            onChangeText={(text) => setPassword2(text)}
          />
          <Pressable
            style={styles.iconDivEye}
            onPress={handlePasswordVisibility2}
          >
            <FontAwesome name={rightIcon2} size={22} color="#0031b8" />
          </Pressable>
        </View>
        <PwdIdenticalAlert />
        <PwdDifferentAlert onceClicked={onClick} />
        <PwdFormatAlert onceClicked={onClick} />
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button} onPress={() => handleReturn()}>
          <FontAwesome color="#ffffff" name="chevron-left" />
        </TouchableOpacity>
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
  Info: {
    flexDirection: "row",
    marginHorizontal: "10%",
    marginBottom: "10%",
  },
  textInfoV: {
    color: "#21AC14",
  },
  textInfoX: {
    color: "#D90000",
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
  icon: {
    marginLeft: 50,
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0031B8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "5%",
  },
  button2: {
    backgroundColor: "#0031B8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: "5%",
  },
});
