import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ContactScreen from "./ContactScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const addContact = useSelector((state) => state.contacts.value);

  const contacts = addContact.map((data, i) => {
    const tableauPhone = data.phones[0].number;
    const tableauEmail = data.emails;
    const key = i;

    let email;

    if (tableauEmail !== undefined) {
      email = Object.values(tableauEmail);
    }

    //   email = Object.values(tableauEmail)
    // }
    return (
      <View style={styles.container} key={i}>
        <TouchableOpacity
          style={styles.case}
          onPress={() =>
            navigation.navigate("ContactsScreen", {
              lastName: data.lastName,
              firstName: data.firstName,
              /* dob: data.dob, phonenr: tableauPhone, email : email, */ key: key,
            })
          }
        >
          <View style={styles.caseIcon}>
            <FontAwesome name="user-circle" size={35} color="#0031B8" />
          </View>
          <Text style={styles.name}>
            {data.lastName} {data.firstName}
          </Text>
          <TouchableOpacity style={styles.param}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}></View>
      <ScrollView>
        <View style={styles.contactContainer}>
          <View style={styles.container}>{contacts}</View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addManually}
          onPress={() => navigation.navigate("ContactAddManually")}
        >
          <Text style={styles.txtBtnAjouter}>Ajouter Manuellement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  addManually: {
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 230,
    backgroundColor: "#0031b8",
  },

  txtBtnAjouter: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  contactContainer: {
    flex: 1,
  },

  case: {
    borderColor: "#222222",
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // shadowColor: "black",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  caseIcon: {
    borderRadius: 70,
    marginLeft: 10,
  },
  icon: {
    marginLeft: 5,
  },
  name: {
    width: 200,
    marginRight: 40,
  },

  btnContainer: {
    width: 150,
    height: 80,
    marginLeft: 200,
    backgroundColor: "blue",
  },

  btnAddContact: {
    backgroundColor: "black",
    width: 90,
    height: 50,
  },

  footer: {
    height: 40,
    marginTop: 20,
  },
});
