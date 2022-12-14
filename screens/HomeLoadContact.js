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


export default function HomeLoadContact() {
  let [error, setError] = useState(undefined);
  let [contacts, setContacts] = useState(undefined);
  const userInfo = useSelector((state) => state.user.value);



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
          setContacts(data);
        } else {
          setError("No contacts found");
        }
      } else {
        setError("Permission to access contacts denied.");
      }
    })();
  }, []);

  const handleAddContactAuto = () => {
    fetch("http://localhost:3000/addContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: userInfo.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
        window.location.reload();
      });
  };


  let getContactData = (data, property) => {
    if (data) {
      return data.map((data, index) => {


        return (
          <View>
            <View key={index}>
              <Text>
                {data.label}: {data[property]}
              </Text>
            </View>
          </View>
        );
      });
    }
  };

  let getContactRows = () => {
    if (contacts !== undefined) {
      return contacts.map((contact, index) => {
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
  style={{ backgroundColor: "#DCDCDC",
width: "80%",
height: "5%",
borderRadius: "5px",
paddingLeft: 15,
marginTop: 15 }}
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
          alignItems: "center"
        }}
        onPress={() => alert(handleAddContactAuto())}
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
            {"   "}
            +
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
    backgroundColor: "red"
  },
});
