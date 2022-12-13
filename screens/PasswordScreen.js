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
import { useState } from "react";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";

export default function PasswordScreen({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("Mail");
  };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
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
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <FontAwesome name={rightIcon} size={22} color="#ffffff" />
          </Pressable>
        </View>

        <Text style={styles.text}>Saisir de nouveau</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <FontAwesome color="#0031B8" name="chevron-left" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <FontAwesome color="#0031B8" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0031B8",
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
  text: {
    color: "#ffffff",
    marginLeft: "5%",
    marginRight: "5%",
  },
  input: {
    width: "70%",
    height: 35,
    marginLeft: "10%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
  },
  icon: {
    color: "#ffffff",
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "75%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "5%",
  },
  button2: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: "5%",
  },
});
