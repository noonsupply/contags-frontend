import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
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
import { useState, useRef } from "react";
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
  const passwordInput = useRef(null);

  const regexMdp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;

  function PwdIdenticalAlert() {
    if (Password1 === Password2 && regexMdp.test(Password2)) {
      return (
        <View style={styles.msgToUserContainer}>
          <Entypo name="check" size={18} color="#21AC14" />
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
          <Entypo name="cross" size={20} color="#D90000" />
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
            Votre mot de passe doit contenir plus de sept caractères, dont une
            majuscule, une minuscule et un caractère spécial.
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
              <Text style={styles.p}>
                Pour finaliser votre inscription, veuillez choisir un mot de
                passe.
              </Text>
              <Text style={styles.textOverInput}>
                Saisissez votre mot de passe :
              </Text>

              <View style={styles.inputAndEyeIconContainer}>
                <View>
                  <TextInput
                    placeholder="Mot de passe"
                    style={styles.passwordInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInput.current.focus()}
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
                    <FontAwesome name={rightIcon} size={22} color="#0046CF" />
                  </Pressable>
                </View>

              </View>

              <Text style={styles.textOverInput}>
                Confirmez votre mot de passe :
              </Text>

              <View style={styles.inputAndEyeIconContainer}>

                <TextInput
                  placeholder="Mot de passe"
                  style={styles.passwordInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility2}
                  value={Password2}
                  onChangeText={(text) => setPassword2(text)}
                  ref={passwordInput}
                  returnKeyType="done"
                />

                <Pressable
                  style={styles.eyeIcon}
                  onPress={handlePasswordVisibility2}
                >
                  <FontAwesome name={rightIcon2} size={22} color="#0046CF" />
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
