import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useTogglePasswordVisibility } from "../module/useTogglePasswordVisibility";
import { useTogglePasswordVisibility2 } from "../module/useTogglePasswordVisibility2";

export default function PasswordScreen({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("MailScreen");
  };

  // const handleInput = () => {
  //   if(){

  //   }else{

  //   }
  // };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();
  const [motDePasse1, setMotDePasse1] = useState("");
  const [motDePasse2, setMotDePasse2] = useState("");

  let iconV = (
    <View>
      <Text style={styles.textInfoX}>Mots de passe différents</Text>
      <Entypo name="cross" size={25} color="#ff0000" style={styles.icon} />
    </View>
  );
  if (motDePasse1 === motDePasse2) {
    iconV = (
      <View>
        <Text style={styles.textInfoV}>Mots de passe indentique</Text>
        <Entypo name="check" size={20} color="#00ff00" style={styles.icon} />
      </View>
    );
  }

  const handleInput = () => {
    navigation.navigate("ProfilCreation");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.divImage}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View> */}
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
            value={motDePasse1}
            onChangeText={(text) => {
              setMotDePasse1(text);
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
            value={motDePasse2}
            onChangeText={(text) => setMotDePasse2(text)}
          />
          <Pressable
            style={styles.iconDivEye}
            onPress={handlePasswordVisibility2}
          >
            <FontAwesome name={rightIcon2} size={22} color="#0031b8" />
          </Pressable>
        </View>
        {iconV}
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <FontAwesome color="#ffffff" name="chevron-left" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => handleInput()}>
          <FontAwesome color="#ffffff" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
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
    top: 96,
  },
  pass: {
    marginTop: "20%",
  },
  passwordContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  textInfoV: {
    color: "#ffffff",
    marginLeft: 50,
    color: "#00ff00",
  },
  textInfoX: {
    color: "#ffffff",
    marginLeft: 50,
    color: "#ff0000",
  },
  text: {
    color: "#0031B8",
    marginLeft: "5%",
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
    marginLeft: 280,
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "60%",
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
