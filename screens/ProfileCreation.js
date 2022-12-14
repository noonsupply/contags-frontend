import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  updateDateOfBirth,
  updateLastName,
  updateFirstName,
  addPhone,
} from "../reducers/users";
import { setAdress } from "../module/adressIP";
import { styles } from "../assets/Style";

const BACKEND_ADDRESS = setAdress();

export default function ProfileCreation({ navigation }) {
  const nameInput = useRef(null);

  // useSelector & useDispatch

  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  // States & Setters

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDob] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [onClick, setOnClick] = useState(false);
  const [phoneNumberAlert, setPhoneNumberAlert] = useState(false);

  // Alertes de renseignement des champs

  function FirstNameAlert(props) {
    if (!firstName && props.onceClicked) {
      return (
        <View>
          <Text style={styles.alertMsg}>Veuillez saisir un prénom</Text>
        </View>
      );
    }
  }

  function LastNameAlert(props) {
    if (!lastName && props.onceClicked) {
      return (
        <View>
          <Text style={styles.alertMsg}>Veuillez saisir un nom</Text>
        </View>
      );
    }
  }

  function DobAlert(props) {
    if (!dob && props.onceClicked) {
      return (
        <View>
          <Text style={styles.alertMsg}>
            Veuillez indiquer votre date de naissance
          </Text>
        </View>
      );
    }
  }

  function PhoneNumberEmptyFieldAlert(props) {
    if (!phoneNumber && props.onceClicked) {
      return (
        <View>
          <Text style={styles.alertMsg}>
            Veuillez saisir un numéro de téléphone
          </Text>
        </View>
      );
    }
  }

  function PhoneNumberWrongFormatAlert(props) {
    if (phoneNumber && !regExPhoneNum.test(phoneNumber) && props.onceClicked) {
      return (
        <View>
          <Text style={styles.alertMsg}>
            Mauvais format de numéro de téléphone
          </Text>
        </View>
      );
    }
  }

  // RegEx de vérification du format du numéro de téléphone (très long, mais vraiment international selon les commentaires)

  const regExPhoneNum =
    /(\+|00|0)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;

  // DatePicker (date of birth => dob)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  let today = new Date();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let formattedDate = "";
    if (day < 10) {
      formattedDate = `0${day}/`;
    } else {
      formattedDate = `${day}/`;
    }

    if (month < 10) {
      formattedDate += `0${month}/`;
    } else {
      formattedDate += `${month}/`;
    }

    return `${formattedDate}${year}`;
  }

  const handleConfirm = (date) => {
    const selectedDate = formatDate(date);
    setDob(selectedDate);
    hideDatePicker();
  };

  function DisplaySelectedDate() {
    if (dob) {
      return (
        <View style={styles.msgToUserContainer}>
          <Text style={styles.validationMsgDatePicker}>
            Date de naissance sélectionnée : {dob}
          </Text>
        </View>
      );
    }
  }

  // HANDLE SUBMIT

  const handleSubmit = () => {
    setOnClick(true);

    if (!phoneNumber) {
      return;
    }

    const formattedPhoneNumber = phoneNumber.split(" ").join("");
    setPhoneNumber(formattedPhoneNumber);

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !phoneNumber ||
      !regExPhoneNum.test(formattedPhoneNumber)
    ) {
      // Le return vide sert à stopper le traitement pour éviter de passer à la screen suivante si une information n'est pas renseignée
      return;
    }

    if ((firstName, lastName, dob, formattedPhoneNumber)) {
      fetch(`${BACKEND_ADDRESS}/users/completeProfile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: user.token,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          phones: [
            {
              phoneType: "main",
              number: formattedPhoneNumber,
              country: null,
              areaCode: null,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(updateLastName(lastName));
            dispatch(updateFirstName(firstName));
            dispatch(
              addPhone({
                phoneType: "main",
                number: formattedPhoneNumber,
                country: null,
                areaCode: null,
              })
            );
            dispatch(updateDateOfBirth(dob));
          }
        });
    }
    navigation.navigate("ProfileAutomatedTagCreation");
  };

  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/contags-HR-blue-logo-transparent-background.png")}
              ></Image>
            </View>

            <View style={styles.profileCreationMainContainer}>
              <Text style={styles.p}>
                Dites-nous en plus sur vous !
              </Text>

              <Text style={styles.textOverInput}>Prénom</Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Votre prénom"}
                autoCapitalize="none"
                textContentType="name"
                returnKeyType="next"
                onSubmitEditing={() => nameInput.current.focus()}
                onChangeText={(e) => setFirstName(e)}
                value={firstName}
              ></TextInput>
              <FirstNameAlert onceClicked={onClick} />

              <Text style={styles.textOverInput}>Nom</Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Votre nom"}
                autoCapitalize="none"
                textContentType="familyName"
                returnKeyType="next"
                ref={nameInput}
                onChangeText={(e) => setLastName(e)}
                value={lastName}
              ></TextInput>
              <LastNameAlert onceClicked={onClick} />

              <Text style={styles.textOverInput}>Date de naissance</Text>

              <View style={styles.dateTimePickerBtnContainer}>
                <Button
                  title="Sélectionnez votre date de naissance"
                  onPress={showDatePicker}
                  color={"#0046CF"}
                />
              </View>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={today}
              />

              <DisplaySelectedDate />
              <DobAlert onceClicked={onClick} />

              <Text style={styles.textOverInput}>
                Numéro de téléphone portable
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder={"Votre numéro de téléphone"}
                onChangeText={(e) => setPhoneNumber(e)}
                value={phoneNumber}
                keyboardType={"phone-pad"}
              ></TextInput>
              <PhoneNumberEmptyFieldAlert onceClicked={onClick} />
              <PhoneNumberWrongFormatAlert onceClicked={onClick} />
            </View>

            <View style={styles.navigationContainerSubmitOnly}>
              <TouchableOpacity
                style={styles.navigationBtn}
                onPress={() => handleSubmit()}
              >
                <FontAwesome color="#FFFFFF" name="chevron-right" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}