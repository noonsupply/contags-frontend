import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Button,
  Dimensions
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setContact, updateContact } from "../reducers/contacts";



export default function ContactScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);

  const personne = route.params;

  //sauvegarde de l'ancienne data du contact
  const oldContacts = {
    lastName: contacts[personne.key].lastName,
    firstName: contacts[personne.key].firstName,
  };

  //initialisation des états
  useEffect(() => {

    const indexContact = contacts.findIndex(
      (elt) =>
        elt.lastName === contacts[personne.key].lastName &&
        elt.firstName === contacts[personne.key].firstName
    );

    if (indexContact !== -1) {
      // on parcourt les keys à changer
      const dataContactTemp = contacts[indexContact];
      setDob(dataContactTemp.dob);
      if (dataContactTemp.emails.length > 0) {
        setEmail1(dataContactTemp.emails[0].email);
      }
      if (dataContactTemp.emails.length > 1) {
        setEmail2(dataContactTemp.emails[1].email);
      }

      if (dataContactTemp.phones.length > 0) {
        setPhoneNr1(dataContactTemp.phones[0].number);
      }
      if (dataContactTemp.phones.length > 1) {
        setPhoneNr2(dataContactTemp.phones[1].number);
      }
    } else {
      console.log("error in updateContact : contact not find");
    }
  }, []);

  //fin initialisation des états

  const [lastName, setLastName] = useState(contacts[personne.key].lastName);
  const [firstName, setFirstName] = useState(contacts[personne.key].firstName);
  const [dob, setDob] = useState("");
  const [phonenr1, setPhoneNr1] = useState("");
  const [phonenr2, setPhoneNr2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const [dataContact, setDataContact] = useState({});

  const handleSubmit = () => {
    const phoneTableau = [];
    const emailTableau = [];
    const indexContact = contacts.findIndex(
      (elt) =>
        elt.lastName === contacts[personne.key].lastName &&
        elt.firstName === contacts[personne.key].firstName
    );
    if (indexContact !== -1) {
      const dataContact = contacts[indexContact];

      if (dataContact.phones.length > 0) {
        phoneTableau.push({
          phoneType: dataContact.phones[0].phoneType,
          number: phonenr1,
          areaCode: dataContact.phones[0].areaCode,
          country: dataContact.phones[0].country,
        });
      }

      if (dataContact.phones.length > 1) {
        phoneTableau.push({
          phoneType: dataContact.phones[1].phoneType,
          number: phonenr2,
          areaCode: dataContact.phones[1].areaCode,
          country: dataContact.phones[1].country,
        });
      }

      if (dataContact.phones.length === 0 && phonenr1 != "") {
        phoneTableau.push({
          phoneType: "Home",
          number: phonenr1,
          areaCode: "",
          country: "",
        });
      }


      if (dataContact.emails.length > 0) {
        emailTableau.push({
          emailType: dataContact.emails[0].emailType,
          email: email1,
        });
      }

      if (dataContact.emails.length > 1) {
        emailTableau.push({
          emailType: dataContact.emails[1].emailType,
          email: email2,
        });
      }

      if (dataContact.emails.length === 0 && email1 != "") {
        emailTableau.push({
          emailType: "Personal",
          email: email1,
        });
      }

/* console.log({
  lastName: lastName,
  firstName: firstName,
  dob: dob,
  phones: phoneTableau,
  emails: emailTableau,
},) */

dispatch(
        updateContact({
          contact: oldContacts,
          newDatas: {
            lastName: lastName,
            firstName: firstName,
            dob: dob,
            phones: phoneTableau,
            emails: emailTableau,
          },
        })
      );
    }
  };



  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      {/* <View style={styles.caseHeader}>
         <View style={styles.header}>
          <FontAwesome name="chevron-left" size={20} color="#0031B8" />
          <Entypo.Button
            //onPress={() => {toggleDrawer}}
            name="dots-three-vertical"
            size={0}
            color="#0031B8"
          />
        </View> 
      </View> */}
      {/* <View style={styles.icon}>
        <FontAwesome name="user-circle" size={100} color="#0031B8" />
      </View> */}
      {/* <View style={styles.fastAction}>
        <FontAwesome name="phone" size={30} color="#0031B8" />
        <Entypo name="message" size={30} color="#0031B8" />
        <FontAwesome name="envelope" size={30} color="#0031B8" />
        <FontAwesome name="paper-plane" size={30} color="#0031B8" />
      </View> */}
      <View style={styles.caseBody}>
        <Text> DEBUT</Text>
        <View style={styles.nameandfirst}>
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              onChangeText={(value) => setLastName(value)}
              value={lastName}
            />
          </View>

          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              onChangeText={(value) => setFirstName(value)}
            >
              {firstName}
            </TextInput>
          </View>
        </View>
        <View style={styles.nameandfirst}>
          {/*Debut date de naissance*/}
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              onChangeText={(value) => setDob(value)}
            >
              {dob}
            </TextInput>
          </View>
        </View>
        <View style={styles.nameandfirst}>
          {/*Debut num perso*/}
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              onChangeText={(value) => setPhoneNr1(value)}
            >
              {phonenr1}
            </TextInput>
          </View>
          {/*Debut num pro*/}
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              onChangeText={(value) => setPhoneNr2(value)}
            >
              {phonenr2}
            </TextInput>
          </View>
        </View>
        {/*Debut Mail perso*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            onChangeText={(value) => setEmail1(value)}
          >
            {email1}
          </TextInput>
        </View>
        {/*Debut Mail pro*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            onChangeText={(value) => setEmail2(value)}
          >
            {email2}
          </TextInput>
        </View>
        {/*Debut Tags*/}
        <View style={styles.nameandfirst}>
          <View style={styles.casePrenom}>
            <TextInput placeholder="Tags" style={styles.inputTags}></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnUpdateContact}
          onPress={() => handleSubmit()}
        >
          <Text>Mettre à jour</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnUpdateContact: {
    width: 100,
    backgroundColor: "#0031b8",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 230,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    height : "100%",
    width : "100%",
  },
  caseHeader: {
    alignItems: "center",
    marginTop: 40,
    height : 0,
  },
  header: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
    width: "90%",
    height: 0,
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
    borderWidth: 0.5,
    height: 35,
    width: 350,
    paddingHorizontal: 15,
  },
  inputTags: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 0.5,
    height: 130,
    width: "90%",
    paddingHorizontal: 15,
  },
  nameandfirst: {
    margin: "3%",
  },
});
