import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import {setContact} from "../reducers/contacts"
//import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function HomeLoadContact({navigation}) {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.value);

  let [error, setError] = useState(undefined);
  let [myContacts, setMyContacts] = useState([]);

  const BACKEND_ADDRESS = "http://172.16.188.143:3000";

  useEffect(() => {

    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Birthday,
            Contacts.Fields.Emails,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });

        if (data.length > 0) {
          const contactPush = data.map(element => { 
            const tableauEmail = element.emails;
            let mailTableau = []
            if(tableauEmail!==undefined){
              
            tableauEmail.forEach(emailElement => mailTableau.push({emailType: emailElement.label, email: emailElement.email }));
            }

            const tableauPhone = element.phoneNumbers;
            let phoneTableau = []
            tableauPhone.forEach(phoneElement => phoneTableau.push({phoneType: phoneElement.label, number: phoneElement.number, country: phoneElement.countryCode, areaCode: phoneElement.countryCode }));

            return{
            lastName: element.lastName,
            firstName: element.firstName,
            emails: mailTableau,
            phones: phoneTableau,
          }})
          
          setMyContacts(contactPush);
          
        } else {
          setError("No contacts found");
        }
      } else {
        setError("Permission to access contacts denied.");
      }
    })();
  }, []);
  const  handleAddContactAuto = () => {

     fetch(`${BACKEND_ADDRESS}/users/addAllContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: "t320Oc5FBgBjccN3hoqA334j7sT5XO5I",
          contacts: myContacts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.result){
            dispatch(setContact(myContacts))
          }
          alert("Import des contacts réalisé avec succès")
          navigation.navigate("HomeScreen");
        });
  };

  let getContactData = (contacts, property) => {
    if (contacts) {
      return contacts.map((contacts, index) => {
        return (
          <View>
            <View key={index}>
              <Text>
                {contacts.label}: {contacts[property]}
              </Text>
            </View>
          </View>
        );
      });
    }
  };

  let getContactRows = () => {
    if (myContacts !== undefined) {
      return myContacts.map((contact, index) => {
        return (
          <View key={index} style={styles.contact}>
            <Text>
              Name: {contact.firstName} {contact.lastName}
            </Text>
            {contact.birthday ? (
              <Text>
                Birthday: {contact.birthday.month}/{contact.birthday.day}/
                {contact.birthday.year}
              </Text>
            ) : undefined}
            {getContactData(contact.phoneNumbers, "number")}
            {getContactData(contact.emails, "email")}
          </View>
        );
      });
    } else {
      return <Text>Awaiting contacts...</Text>;
    }
  };
  //{getContactRows()} à ajouter
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{
          backgroundColor: "#DCDCDC",
          width: "80%",
          height: "5%",
          borderRadius: "5px",
          paddingLeft: 15,
          marginTop: 15,
        }}
        editable={false}
        placeholder="🔎 Search                                                      ✖️"
      />
      <Text
        style={{
          color: "#595959",
          fontWeight: "1px",
          fontSize: "18px",
          paddingTop: 10,
          marginTop: 200,
          textAlign: "center",
        }}
      >
        Importez ou saisissez un contact manuellement
      </Text>

      <Pressable
        style={{
          display: "flex",
          marginRight: 40,
          marginTop: 20,
          marginLeft: "50%",
          marginRight: "50%",
          borderRadius: 5,
          borderWidth: 1,
          width: 300,
          height: 50,
          borderColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleAddContactAuto()}
      >
        <Text>
          <Text
            style={{
              color: "#0031b8",
              fontWeight: "1px",
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "bold",
              textAlignVertical: "center",
            }}
          >
            Importer mes contacts
          </Text>
          <Text
            style={{ color: "#0031b8", fontWeight: "bold", fontSize: "30px" }}
          >
            {"   "}+
          </Text>
        </Text>
      </Pressable>
      <ScrollView></ScrollView>

      <StatusBar style="auto" />
      <View style={styles.btnContainer}>
        <Text>Ajouter manuellement</Text>
        <TouchableOpacity
          style={styles.btnAddContact}
          onPress={() => alert("Bonjour")}
        >
          <FontAwesome color="#ffffff" name="plus" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  contact: {
    marginVertical: 20,
  },

  btnContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 150,
    height: 80,
    alignItems: "stretch",
    textAlign: "right",
    marginLeft: 200,
  },

  btnAddContact: {
    backgroundColor: "#0031b8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    alignSelf: "flex-end",
  },

  btnAddContactMain: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "transparent",
  },

  textBtn: {
    fontSize: 30,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#0031b8",
    backgroundColor: "red",
  },
});
