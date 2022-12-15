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
import { EvilIcons } from "@expo/vector-icons";

export default function PasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.case}>
        <View style={styles.caseIcon}>
          <FontAwesome name="user-circle" size={35} color="#0031B8" />
        </View>
        <Text style={styles.name}>NOM Prénom</Text>
        <TouchableOpacity style={styles.param}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  case: {
    borderColor: "#222222",
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
  caseIcon: {
    borderRadius: 70,
    marginLeft: 10,
  },
  icon: {
    marginLeft: 5,
  },
  name: {
    marginLeft: 30,
  },
  param: {
    marginLeft: 170,
  },
});
