import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  KeyboardAvoidingView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import users from "../reducers/users";

const BACKEND_ADDRESS = "http://172.16.191.9:3000";

export default function ProfileCreation({ navigation }) {
  // useSelector

  const user = useSelector((state) => state.users.value);

  // Variables de useState

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [validateTyping, setValidateTyping] = useState(false);
  const [dob, setDob] = useState(null);

  // Alertes de remplissage des champs

  const firstNameFieldEmptyAlert = (
    <View>
      <Text style={styles.alertMsg}>Veuillez saisir un prénom</Text>
    </View>
  );

  const lastNameFieldEmptyAlert = (
    <View>
      <Text style={styles.alertMsg}>Veuillez saisir un nom</Text>
    </View>
  );

  const dateOfBirthNotSelectedAlert = (
    <View>
      <Text style={styles.alertMsg}>
        Veuillez indiquer votre date de naissance
      </Text>
    </View>
  );

  const phoneNumberFieldEmptyAlert = (
    <View>
      <Text style={styles.alertMsg}>
        Veuillez saisir un numéro de téléphone
      </Text>
    </View>
  );

  const phoneNumberWrongFormatAlert = (
    <View>
      <Text style={styles.alertMsg}>Mauvais format de numéro de téléphone</Text>
    </View>
  );

  const allFieldsAreNotFilled = (
    <View>
      <Text style={styles.alertMsg}>
        Veuillez indiquer toutes les informations demandées.
      </Text>
    </View>
  );

  // RegEx de vérification du format du numéro de téléphone

  const regExPhoneNum =
    /(\+|00|0)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;

  // Fonctions de vérification du remplissage des champs et de la sélection de date

  const emptyFirstNameFieldCheck = () => {
    if (!firstName) {
      return firstNameFieldEmptyAlert;
    }
  };

  const emptyLastNameFieldCheck = () => {
    if (!lastName) {
      return lastNameFieldEmptyAlert;
    }
  };

  const dobSelectionCheck = () => {
    if (!dob) {
      return dateOfBirthNotSelectedAlert;
    }
  };

  const phoneNumberFieldCheck = () => {
    if (!phoneNumber) {
      return phoneNumberFieldEmptyAlert;
    } else if (!regExPhoneNum.test(phoneNumber)) {
      return phoneNumberWrongFormatAlert;
    } else {
    }
  };

  // const allFieldsFilledCheck = () => {
  //   if(!firstName || !lastName || !dob || !phoneNumber) {
  //     return allFieldsAreNotFilled
  //   }
  // }

  // DatePicker (date of birth => dob)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  let today = new Date();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDob(date);
    hideDatePicker();
  };

  // HANDLE SUBMIT

  const handleSubmit = () => {
    // navigation.navigate("TagCreation");
    setValidateTyping(true);
    const formattedPhoneNumber = phoneNumber.split(" ").join("");
    setPhoneNumber(formattedPhoneNumber);

    if ((firstName, lastName, dob)) {
      fetch(`${BACKEND_ADDRESS}/users/completeProfile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: user.token,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          // phones: formattedPhoneNumber,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("log de data indique:", data);
        });
    } else {
      // {allFieldsAreNotFilled()};
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView>
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
                <TextInput
                  style={styles.input}
                  placeholder={"Votre prénom"}
                  onChangeText={(e) => setFirstName(e)}
                  value={firstName}
                ></TextInput>
                {validateTyping && emptyFirstNameFieldCheck()}

                <Text style={styles.text}>Nom</Text>
                <TextInput
                  style={styles.input}
                  placeholder={"Votre nom"}
                  onChangeText={(e) => setLastName(e)}
                  value={lastName}
                ></TextInput>
                {validateTyping && emptyLastNameFieldCheck()}

                <Text style={styles.text}>Date de naissance</Text>
                <View style={styles.datePickerContainer}>
                  <Button
                    title="Sélectionnez votre date de naissance"
                    onPress={showDatePicker}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    maximumDate={today}
                  />
                </View>

                <Text style={styles.text}>Numéro de téléphone portable</Text>
                <TextInput
                  style={styles.input}
                  placeholder={"Votre numéro de téléphone"}
                  onChangeText={(e) => setPhoneNumber(e)}
                  value={phoneNumber}
                ></TextInput>
                {validateTyping && phoneNumberFieldCheck()}
                {/* {allFieldsFilledCheck()} */}
              </View>
            </View>

            <View style={styles.navigationContainer}>
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
  },

  // Logo

  mainContainer: {
    height: "70%",
    paddingVertical: 25,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },

  logo: {
    height: 120,
    width: 335,
  },

  // Main

  welcomeTextContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },

  welcomeText: {
    color: "#0031B8",
    fontSize: 18,
    fontWeight: "500",
  },

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
    marginTop: 5,
    paddingHorizontal: 15,
  },

  text: {
    color: "#0031B8",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },

  welcomeTextContainer: {
    marginLeft: 25,
    marginBottom: 25,
  },

  alertMsg: {
    color: "red",
    fontSize: 14,
    fontWeight: "500",
  },

  datePickerContainer: {
    marginVertical: 10,
  },

  // Navigation

  navigationContainer: {
    height: "10%",
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 25,
  },

  btnForward: {
    alignItems: "center",
    backgroundColor: "#0031B8",
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
});
