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

export default function PasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.caseHeader}>
        <View style={styles.header}>
          <FontAwesome name="chevron-left" size={20} color="#0031B8" />
          <Entypo name="dots-three-vertical" size={24} color="#0031B8" />
        </View>
      </View>
      <View style={styles.icon}>
        <FontAwesome name="user-circle" size={100} color="#0031B8" />
      </View>
      <View style={styles.fastAction}>
        <FontAwesome name="phone" size={30} color="#0031B8" />
        <Entypo name="message" size={30} color="#0031B8" />
        <FontAwesome name="envelope" size={30} color="#0031B8" />
        <FontAwesome name="paper-plane" size={30} color="#0031B8" />
      </View>
      <View style={styles.caseBody}>
        <View style={styles.nameandfirst}>
          {/*Debut prenom*/}
          <View style={styles.casePrenom}>
            <TextInput
              placeholder="Prénom"
              style={styles.inputPrenom}
            ></TextInput>
          </View>
          {/*Debut nom*/}
          <View style={styles.casePrenom}>
            <TextInput placeholder="Nom" style={styles.inputPrenom}></TextInput>
          </View>
        </View>
        <View style={styles.nameandfirst}>
          {/*Debut date de naissance*/}
          <View style={styles.casePrenom}>
            <TextInput
              placeholder="Date de naissance"
              style={styles.inputPrenom}
            ></TextInput>
          </View>
        </View>
        <View style={styles.nameandfirst}>
          {/*Debut num perso*/}
          <View style={styles.casePrenom}>
            <TextInput
              placeholder="Numéro perso"
              style={styles.inputPrenom}
              keyboardType="phone-pad"
            ></TextInput>
          </View>
          {/*Debut num pro*/}
          <View style={styles.casePrenom}>
            <TextInput
              placeholder="Numéro pro"
              style={styles.inputPrenom}
            ></TextInput>
          </View>
        </View>
        {/*Debut Mail perso*/}
        <View style={styles.casePrenom}>
          <TextInput
            placeholder="Mail perso"
            style={styles.inputPrenom}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          ></TextInput>
        </View>
        {/*Debut Mail pro*/}
        <View style={styles.casePrenom}>
          <TextInput
            placeholder="Mail pro"
            style={styles.inputPrenom}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          ></TextInput>
        </View>
        {/*Debut Tags*/}
        <View style={styles.nameandfirst}>
          <View style={styles.casePrenom}>
            <TextInput placeholder="Tags" style={styles.inputTags}></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  caseHeader: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: "15%",
    justifyContent: "space-between",
    width: "90%",
  },
  icon: {
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  fastAction: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "12%",
    marginBottom: "8%",
  },
  casePrenom: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputPrenom: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 0.8,
    height: 35,
    width: 250,
    paddingHorizontal: 15,
  },
  inputTags: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 0.8,
    height: 130,
    width: 250,
    paddingHorizontal: 15,
  },
  nameandfirst: {
    margin: "3%",
  },
});
