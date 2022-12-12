import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProfileCreation() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <View style={styles.alignImage}>
        <Image
          style={styles.logo}
          source={require("../assets/contags_logo_white.png")}
        />
      </View>
      <View style={styles.alignText}>
        <Text style={styles.welcomeText}>
          Vos données essentielles ont été transformées en tags :
        </Text>
      </View>
      <View style={styles.tagContainer}>
        <View style={styles.tagWhite}>
          <Text style={styles.darkTagText}>Jean</Text>
        </View>
        <View style={styles.tagWhite}>
          <Text style={styles.darkTagText}>Dupont</Text>
        </View>
        <View style={styles.tagWhite}>
          <Text style={styles.darkTagText}>06 01 02 03 04</Text>
        </View>
        <View style={styles.tagWhite}>
          <Text style={styles.darkTagText}>prenom.nom@domain.com</Text>
        </View>
      </View>
      <View style={styles.alignText}>
        <Text style={styles.welcomeText}>
          Sélectionnez des tags qui vous correspondent parmi les propositions ou
          ajoutez directement des tags personnalisés :{" "}
        </Text>
      </View>
      <View style={styles.tagContainer}>
        <View style={styles.tagYellow}>
          <Text style={styles.lightTagText}>Pâtisserie</Text>
        </View>
        <View style={styles.tagMaroon}>
          <Text style={styles.lightTagText}>Vin</Text>
        </View>
        <View style={styles.tagGreen}>
          <Text style={styles.lightTagText}>Football</Text>
        </View>
        <View style={styles.tagWhite}>
          <Text style={styles.darkTagText}>Magic: the Gathering</Text>
        </View>
        <View style={styles.tagGray}>
          <Text style={styles.darkTagText}>Informatique</Text>
        </View>
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
    </ScrollView>
    </SafeAreaView>
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

    flex: 1,
    paddingTop: StatusBar.currentHeight,
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

  scrollView: {
    backgroundColor: "#0031B8",
  },

  tagContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 25,
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },

  tagGray: {
    alignItems: "center",
    backgroundColor: "#CCCCCC",
    borderRadius: 20,
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 12.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  tagGreen: {
    alignItems: "center",
    backgroundColor: "#46a03e",
    borderRadius: 20,
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 12.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  tagMaroon: {
    alignItems: "center",
    backgroundColor: "#881A70",
    borderRadius: 20,
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 12.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  tagWhite: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    color: "#0031B8",
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 12.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  tagYellow: {
    alignItems: "center",
    backgroundColor: "#DFC120",
    borderRadius: 20,
    flexShrink: 1,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 12.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  lightTagText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  darkTagText: {
    color: "#0031B8",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  welcomeText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
});
