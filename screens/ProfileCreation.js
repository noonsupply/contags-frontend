import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProfileCreation({ navigation }) {
  const handleTag = () => {
    navigation.navigate("TagCreation");
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={"#FFFFFF"}
        barStyle={"dark-content"}
        translucent={true}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.globalContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/contags_logo_white.png")}
            />
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>
                Bienvenue, faisons connaissance !
              </Text>
            </View>

            <View style={styles.inputTextContainer}>
              <Text style={styles.text}>Prénom</Text>
              <TextInput style={styles.input} placeholder={"Jean"}></TextInput>
              <Text style={styles.text}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder={"Dupont"}
              ></TextInput>
              <Text style={styles.text}>Date de naissance</Text>
              {/* <TextInput
                style={styles.input}
                placeholder={"01/01/2000"}
              ></TextInput> */}
              <View style={styles.datePickerContainer}>
                <Button title="Sélectionnez votre date de naissance" onPress={showDatePicker} />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <Text style={styles.text}>Numéro de téléphone portable</Text>
              <TextInput
                style={styles.input}
                placeholder={"06 01 02 03 04"}
              ></TextInput>
            </View>
          </View>

          <View style={styles.navigationContainer}>
            {/* <TouchableOpacity style={styles.btnBack}>
              <FontAwesome color="#FFFFFF" name="chevron-left" />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.btnForward}
              onPress={() => handleTag()}
            >
              <FontAwesome color="#FFFFFF" name="chevron-right" />
            </TouchableOpacity>
          </View>
        </View>
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
  },

  // Logo

  mainContainer: {
    // backgroundColor: "green",
    height: "70%",
    paddingVertical: 25,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    height: "20%",
  },

  logo: {
    height: 120,
    width: 335,
  },

  // Main

  inputTextContainer: {
    marginLeft: 25,
    marginRight: 25,
  },

  input: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1.5,
    color: "#5A5A5F",
    height: 45,
    marginBottom: 25,
    marginTop: 5,
    paddingHorizontal: 15,
  },

  text: {
    color: "#0031B8",
    fontSize: 16,
    fontWeight: "600",
  },

  welcomeTextContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },

  welcomeText: {
    color: "#0031B8",
    fontSize: 18,
    fontWeight: "500",
  },

  datePickerContainer: {
    marginVertical: 10,
  },

  // Navigation

  navigationContainer: {
    // backgroundColor: "orange",
    height: "10%",
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 25,
  },

  // btnBack: {
  //   alignItems: "center",
  //   backgroundColor: "#0031B8",
  //   borderRadius: 50,
  //   height: 50,
  //   justifyContent: "center",
  //   width: 50,
  // },

  btnForward: {
    alignItems: "center",
    backgroundColor: "#0031B8",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },

  // btnText: {
  //   color: "#0031B8",
  //   fontSize: 14,
  //   fontWeight: "bold",
  // },
});
