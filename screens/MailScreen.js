import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MailScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>
      <View style={styles.inputText}>
        <Text style={styles.text}>Saisissez votre adresse mail</Text>
        <TextInput style={styles.input} placeholder={"Email"}></TextInput>
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button}>
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
    display: "flex",
  },
  logo: {
    width: 293,
    height: 102,
    left: 50,
    top: 96,
  },
  inputText: {
    marginTop: 250,
    marginLeft: 25,
    marginRight: 25,
  },
  text: {
    color: "#ffffff",
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
  },
  icon: {
    color: "#ffffff",
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 320,
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  button2: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
