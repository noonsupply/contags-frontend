import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Tag from "../components/Tag";
import { setAdress } from "../module/adressIP";

const BACKEND_ADDRESS = setAdress(); //"http://192.168.1.92:3000";

export default function TagCreation({ navigation }) {
  const [tagArr, setTagArr] = useState([]);

  // Fonctions de navigation
  const handleSubmit = () => {
    navigation.navigate("HomeLoadContact");
  };

  const handleReturn = () => {
    navigation.navigate("ProfileCreation");
  };

  // Fonctions d'affichage conditionnel (données saisies dans ProfileCreation)

  function UserFirstName() {
    const userFirstName = useSelector((state) => state.users.value.firstName);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userFirstName}Firstname</Text>
      </View>
    );
  }

  function UserLastName() {
    const userLastName = useSelector((state) => state.users.value.lastName);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userLastName}Lastname</Text>
      </View>
    );
  }

  function UserPhoneNumber() {
    const phoneNumberArr = useSelector((state) => state.users.value.phones);
    const userPhoneNumber = phoneNumberArr.map((mainPhoneNumber) => {
      return mainPhoneNumber.number;
    });
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userPhoneNumber}+33643338361</Text>
      </View>
    );
  }

  function UserMainEmail() {
    const userMainEmail = useSelector((state) => state.users.value.emailMain);
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>
          {userMainEmail}name.name@domain.com
        </Text>
      </View>
    );
  }

  useEffect(() => {
    fetch(`${BACKEND_ADDRESS}/getProposedTags`)
      .then((response) => response.json())
      .then((data) => {
        setTagArr(data.proposedTags);
      });
  }, []);

  const ProposedTags = tagArr.map((element, index) => {
    return (
      <TouchableOpacity key={index}>
        <Tag tag={element} key={index} />
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <View style={styles.globalContainer}>


        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Vos données essentielles ont été transformées en tags :
            </Text>
          </View>

          <View style={styles.userTagsContainer}>
            <UserFirstName />
            <UserLastName />
            <UserPhoneNumber />
            <UserMainEmail />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Sélectionnez les tags qui vous correspondent parmi les
              propositions ci-dessous ou ajoutez directement vos tags
              personnalisés :
            </Text>
          </View>


            <ScrollView
              style={styles.proposedTagsScrollView}
              contentContainerStyle={styles.contentContainer}
              fadingEdgeLength={200}
              persistentScrollbar={true}
            >
              {ProposedTags}
            </ScrollView>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Vos tags sélectionnés :
            </Text>
          </View>

          <ScrollView
            style={styles.selectedTagsScrollView}
            contentContainerStyle={styles.contentContainer}
            fadingEdgeLength={200}
            persistentScrollbar={true}

          >
            {ProposedTags}
          </ScrollView>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //  Views & Global container

  sav: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },


  globalContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 15,
  },

  // Main

  mainContainer: {
    height: "90%",
  },

  userTagsContainer: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexWrap: "wrap",
    flexDirection: "row",
    marginVertical: 10,
    // backgroundColor: "red",
  },

  proposedTagsScrollView: {
    // flexWrap: "wrap",
    // flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#0031B8",
    // borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

    selectedTagsScrollView: {
    // flexWrap: "wrap",
    // flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#0031B8",
    // borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

  contentContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },

  // Text

  textContainer: {
    marginHorizontal: 25,
    // backgroundColor: "yellow",
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

  // Navigation

  navigationContainer: {
    // backgroundColor: "orange",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  // Tags

  // templateTagContainer: {
  //   alignItems: "flex-start",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   // justifyContent: "center",
  //   marginBottom: 15,
  //   marginTop: 15,
  //   paddingLeft: 25,
  //   paddingRight: 25,
  //   height: 250,
  // },

  tagTextBlue: {
    color: "#0031B8",
    fontSize: 14,
    fontWeight: "bold",
  },

  tagTextWhite: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  tagFullDarkBlue: {
    backgroundColor: "#0031B8",
    alignItems: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 10,
    marginVertical: 3,
    paddingHorizontal: 10,
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
});
