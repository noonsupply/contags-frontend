import React from "react";
import * as ImagePicker from "expo-image-picker";
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
  Dimensions,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, setContact } from "../reducers/contacts";

export default function ContactAddManually({ navigation }) {

    const BACKEND_ADDRESS = "http://192.168.1.43:3000";

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);
 

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [phonenr1, setPhoneNr1] = useState("");
  const [phonenr2, setPhoneNr2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [contactPush, SetContactPush] = useState([]);



  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {   

SetContactPush({lastName: lastName,
        firstName: firstName,
        dob: dob,
        phones: {phoneType: "Home", number: phonenr1, areaCode: "", country: ""},
        emails: [{emailType: "Home", email: email1}]})

        console.log("je suis dans ContactaddManually",contactPush)

dispatch(
    addContact({
          contacts: {
            lastName: lastName,
            firstName: firstName,
            dob: dob,
            phones: {phoneType: "Home", number: phonenr1, areaCode: "", country: ""},
            emails: [{emailType: "Home", email: email1}],
          },
        })
      );

     

fetch(`${BACKEND_ADDRESS}/users/createContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: "pw0aeY_jubIXlYijDXI-47ICxhbwup5f",
          contacts: contactPush
        }),
      })
        .then((res) => res.json())
          //alert("Contact enregistré avec succés"); 
          //navigation.navigate("HomeScreen"); 
        ;
    }
  

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.caseHeader}>
        <View style={styles.header}>
          <Pressable>
            <FontAwesome
              name="chevron-left"
              size={20}
              color="#0031B8"
              onPress={() => navigation.navigate("HomeScreen")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.icon}>
        <Button
          title="Appuyez ici pour sélectionner une image"
          onPress={pickImage}
        />
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 2000 }}
          />
        )}
      </View>
      <View style={styles.caseBody}>
        <View style={styles.nameandfirst}>
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              placeholder="Prénom"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setLastName(value)}
              value={lastName}
            />
          </View>

          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              placeholder="Nom"
              placeholderTextColor="#DCDCDC"
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
              placeholder="Date de naissance"
              placeholderTextColor="#DCDCDC"
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
              placeholder="N° de téléphone n°1"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setPhoneNr1(value)}
            >
              {phonenr1}
            </TextInput>
          </View>
          {/*Debut num pro*/}
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              placeholder="N° de téléphone n°2"
              placeholderTextColor="#DCDCDC"
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
            placeholder="Email n°1"
              placeholderTextColor="#DCDCDC"
            onChangeText={(value) => setEmail1(value)}
          >
            {email1}
          </TextInput>
        </View>
        {/*Debut Mail pro*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            placeholder="Email n°2"
              placeholderTextColor="#DCDCDC"
            onChangeText={(value) => setEmail2(value)}
          >
            {email2}
          </TextInput>
        </View>
        {/*Debut Tags*/}
        <View style={styles.nameandfirst}>
          <View style={styles.casePrenom}>
            <TextInput placeholder="Tags" 
            style={styles.inputTags}
            
             ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnUpdateContact}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.txtBtnAjouter}>Ajouter</Text>
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
  },
  caseHeader: {
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
    width: "90%",
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

  txtBtnAjouter: {
    color: "white",
  },
});
