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
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../assets/Style";

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
        <View style={styles.msgToUserContainer}>
          <Entypo
            name="check"
            size={20}
            color="#21AC14"
            style={styles.checkIcon}
          />
          <Text style={styles.validationMsg}>
            Parfait, vos mots de passe sont identiques !
          </Text>
        </View>
      );
    }
  }

  function PwdDifferentAlert(props) {
    if (Password1 !== Password2 && props.onceClicked) {
      return (
        <View style={styles.msgToUserContainer}>
          <Entypo
            name="cross"
            size={25}
            color="#D90000"
            style={styles.crossIcon}
          />
          <Text style={styles.alertMsg}>
            Attention, vos mots de passe sont différents !
          </Text>
        </View>
      );
    }
  }
  function PwdFormatAlert(props) {
    if (!regexMdp.test(Password1) && props.onceClicked) {
      return (
        <View style={styles.msgToUserContainer}>
          <Text style={styles.alertMsg}>
            Votre mot de passe doit contenir plus de sept caractères, dont une majuscule, une minuscule et un
            caractère spécial.
          </Text>
        </View>
      );
    }
  }
  const handleSubmit = () => {
    setOnClick(true);

    if (Password1 === Password2 && regexMdp.test(Password1)) {
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
            navigation.navigate("ProfileCreation");
          }
        });
    }
  };

  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <KeyboardAvoidingView style={styles.kav}>
        <View style={styles.logoContainer}>
          {/* <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
          ></Image> */}
        </View>

        <View style={styles.mainContainerWithLogo}>
          <Text style={styles.simpleText}>
            Pour finaliser votre inscription, veuillez choisir un mot de passe.
          </Text>

          <Text style={styles.textOverInput}>Saisissez votre mot de passe :</Text>

          <View style={styles.inputAndEyeIconContainer}>
            <View>
              <TextInput
                placeholder="Mot de passe"
                style={styles.pwdInput}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                value={Password1}
                onChangeText={(text) => {
                  setPassword1(text);
                }}
              />
            </View>

            <View>
              <Pressable
                style={styles.eyeIcon}
                onPress={handlePasswordVisibility}
              >
                <FontAwesome name={rightIcon} size={22} color="#0031b8" />
              </Pressable>
            </View>
          </View>

          <Text style={styles.textOverInput}>Confirmez votre mot de passe :</Text>

          <View style={styles.inputAndEyeIconContainer}>
            <TextInput
              placeholder="Mot de passe"
              style={styles.pwdInput}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility2}
              value={Password2}
              onChangeText={(text) => setPassword2(text)}
            />

            <Pressable
              style={styles.eyeIcon}
              onPress={handlePasswordVisibility2}
            >
              <FontAwesome name={rightIcon2} size={22} color="#0031b8" />
            </Pressable>
          </View>
          <PwdIdenticalAlert />
          <PwdDifferentAlert onceClicked={onClick} />
          <PwdFormatAlert onceClicked={onClick} />
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navigationBtn}
            onPress={() => handleReturn()}
          >
            <FontAwesome color="#ffffff" name="chevron-left" />
          </TouchableOpacity>
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
