import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import users from "../reducers/users";

export default function TagCreation({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("contactScreen");
  };

  const handleReturn = () => {
    navigation.navigate("ProfileCreation");
  };

  function UserFirstName() {
    const userFirstName = useSelector((state) => state.users.value.firstName);
    console.log("Le PRENOM de l'utilisateur est:", userFirstName);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userFirstName}</Text>
      </View>
    );
  }

  function UserLastName() {
    const userLastName = useSelector((state) => state.users.value.name);
    console.log("Le NOM de l'utilisateur est:", userLastName);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userLastName}</Text>
      </View>
    );
  }

  function UserPhoneNumber() {
    const userPhoneNumber = useSelector((state) => state.users.value.phones[0].number);
    console.log("Le NUMERO DE TEL de l'utilisateur est:", userPhoneNumber);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userPhoneNumber}</Text>
      </View>
    );
  }

  function UserMainEmail() {
    const userMainEmail = useSelector((state) => state.users.value.emailMain);
    console.log("Le MAIL de l'utilisateur est:", userMainEmail);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userMainEmail}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView>
          <View style={styles.globalContainer}>
            <View style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Vos données essentielles ont été transformées en tags :
                </Text>
              </View>

              <View style={styles.tagContainer}>
                <UserFirstName />
                <UserLastName />
                <UserPhoneNumber />
                <UserMainEmail />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Sélectionnez des tags qui vous correspondent parmi les
                  propositions ou ajoutez directement des tags personnalisés :
                </Text>
              </View>

              <View style={styles.tagContainer}>
                <View style={styles.tagFullYellow}>
                  <Text style={styles.tagTextWhite}>🥐 Pâtisserie</Text>
                </View>
                <View style={styles.tagFullPurple}>
                  <Text style={styles.tagTextWhite}>🍷 Vin</Text>
                </View>
                <View style={styles.tagFullGreen}>
                  <Text style={styles.tagTextWhite}>⚽ Football</Text>
                </View>
                <View style={styles.tagFullBlack}>
                  <Text style={styles.tagTextWhite}>
                    🃏 Magic: the Gathering
                  </Text>
                </View>
                <View style={styles.tagFullGray}>
                  <Text style={styles.tagTextWhite}>🖥️ Informatique</Text>
                </View>
              </View>
            </View>

            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => handleReturn()}
              >
                <FontAwesome color="#FFFFFF" name="chevron-left" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSkip}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.btnText}>Passer cette étape</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnForward}
                onPress={() => handleSubmit()}
              >
                <FontAwesome color="#FFFFFF" name="chevron-right" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //  Views & Global container

  safeAreaView: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  scrollView: {
    flex: 1,
  },

  globalContainer: {
    flex: 1,
    paddingVertical: 25,
  },

  // Main

  mainContainer: {
    backgroundColor: "green",
    height: "90%",
    paddingVertical: 25,
  },

  // Text

  textContainer: {
    marginHorizontal: 25,
    backgroundColor: "maroon",
  },

  text: {
    color: "#0031B8",
    fontSize: 16,
    fontWeight: "400",
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

  // Tags

  tagContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },

  tagTextBlue: {
    color: "#0031B8",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tagTextWhite: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tagFullGray: {
    alignItems: "center",
    backgroundColor: "#5A5A5F",
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

  tagFullYellow: {
    alignItems: "center",
    backgroundColor: "#EDC808",
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

  tagFullBlack: {
    alignItems: "center",
    backgroundColor: "#000000",
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

  tagFullPurple: {
    alignItems: "center",
    backgroundColor: "#952FE5",
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

  tagFullGreen: {
    alignItems: "center",
    backgroundColor: "#21AC14",
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

  tagFullDarkBlue: {
    alignItems: "center",
    backgroundColor: "#0031B8",
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

  // tagGray: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#5A5A5F",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   fontSize: 12,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // tagDarkBlue: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#0031B8",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   fontSize: 12,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // tagGreen: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#21AC14",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   fontSize: 12,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // tagPurple: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#952FE5",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   fontSize: 12,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // tagBlack: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#000000",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   color: "#0031B8",
  //   fontSize: 12,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // tagYellow: {
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderColor: "#EDC808",
  //   borderWidth: 1.5,
  //   borderRadius: 20,
  //   flexShrink: 1,
  //   height: 35,
  //   justifyContent: "flex-end",
  //   marginBottom: 12.5,
  //   marginLeft: 5,
  //   marginRight: 5,
  //   marginTop: 12.5,
  //   paddingLeft: 12.5,
  //   paddingRight: 12.5,
  // },

  // Navigation

  navigationContainer: {
    backgroundColor: "orange",
    height: "20%",
    // paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 25,
  },

  btnBack: {
    alignItems: "center",
    backgroundColor: "#0031B8",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },

  btnForward: {
    alignItems: "center",
    backgroundColor: "#0031B8",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },

  btnSkip: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  btnText: {
    color: "#0031B8",
    fontSize: 14,
    fontWeight: "bold",
  },
});
