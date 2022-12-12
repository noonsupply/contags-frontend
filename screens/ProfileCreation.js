import { StatusBar } from "expo-status-bar";
import {
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProfileCreation() {
  return (
    <View style={styles.container}>
      <View style={styles.alignImage}>
        <Image
          style={styles.logo}
          source={require("../assets/contags_logo_white.png")}
        />
      </View>
      <View style={styles.alignText}>
        <Text style={styles.welcomeText}>Bienvenue, faisons connaissance !</Text>
      </View>

      <View style={styles.inputText}>
        <Text style={styles.text}>Nom</Text>
        <TextInput style={styles.input} placeholder={"Jean"}></TextInput>
        <Text style={styles.text}>Prénom</Text>
        <TextInput style={styles.input} placeholder={"Dupont"}></TextInput>
        <Text style={styles.text}>Date de naissance</Text>
        <TextInput style={styles.input} placeholder={"01/01/2000"}></TextInput>
        <Text style={styles.text}>Numéro de téléphone portable</Text>
        <TextInput
          style={styles.input}
          placeholder={"06 01 02 03 04"}
        ></TextInput>
      </View>
      <View style={styles.caseButton}>
      <TouchableOpacity style={styles.buttonBack}>
          <FontAwesome color="#0031B8" name="chevron-left" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonForward}>
          <FontAwesome color="#0031B8" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  alignImage: {
    alignItems: "center",
    justifyContent: "center",
  },

  alignText: {
    marginLeft: 25,
    marginBottom: 25,
  },

  buttonBack: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },

  buttonForward: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },

  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
  },

  container: {
    backgroundColor: "#0031B8",
    flex: 1,
  },

  icon: {
    color: "#ffffff",
  },

  input: {
    borderRadius: 5,
    backgroundColor: "#ffffff",
    height: 45,
    marginBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },

  inputText: {
    marginLeft: 25,
    marginRight: 25,
  },

  logo: {
    height: "30%",
    width: "80%",
  },

  text: {
    color: "#ffffff",
    marginBottom: 10,
  },

  welcomeText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
});
