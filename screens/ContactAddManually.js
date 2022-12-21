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
  Modal,
  Button,
  Dimensions,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, setContact } from "../reducers/contacts";
import { setAdress } from "../module/adressIP";
import TagsDefinition from "../components/TagsDefinition";
import TagDelete from "../components/TagDelete";
import { updateArrayContacts, updateArrayTags } from "../module/toolsReducers";

export default function ContactAddManually({ navigation }) {

    const BACKEND_ADDRESS = setAdress();

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);
  const user = useSelector((state) => state.users.value);
 
// états permettant de gérer les inputs
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [phonenr1, setPhoneNr1] = useState("");
  const [phonenr2, setPhoneNr2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [image, setImage] = useState(null);

  // tableau avec les tags
const [theTags, setTheTags] = useState([]);

const [contactPush, setContactPush] = useState([]);



  // gestion de l'affichage de la modal 
  const [modalVisible, setModalVisible] = useState(false);

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

  // fonction pour gérer la validation du contact
  const handleSubmit = () => {   

     // vérification des informations
      
     //création du contact : vérification 

      const newContact ={
        lastName: lastName,
        firstName: firstName,
        dob: dob,
        phones: [{phoneType: "Home", number: phonenr1, areaCode: "", country: ""}, {phoneType: "Other", number: phonenr2, areaCode: "", country: ""} ],
        emails: [{emailType: "Personnal", email: email1}, {emailType: "Other", email: email2}],
        tags : theTags,
        contactedTimesCounter : {"phoneCounter": 0,"smsCounter":0,"emailCounter":0}}

    fetch(`${BACKEND_ADDRESS}/users/createContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: "cYQKAKkl-7L05bFTvzEUdU1ZyQN1NbY5", // users.token,
          contacts: newContact
        }),
      })
        .then((res) => res.json())
        .then((data) =>{
            if(data.result){
              dispatch(addContact(newContact));
              alert("Contact enregistré avec succés"); 
              navigation.navigate("HomeScreen"); 
            }

        })
        ;
} // fin de handleSubmit

// fonction pour gérer la fermeture de la modal des tags
const handleCloseModal =() =>{
  setModalVisible(false);
}

// fonction se déclenchant au clich sur le bouton +Tags
const handleAddTags = () =>{
  setModalVisible(true);
}

// fonction pour gérer l'ajout des tags dans la modale (on considère que le contact existe sinon on est revenu à la page précédente)
const addTags =(tagsFromModal) =>{
  setTheTags(updateArrayTags(theTags,tagsFromModal))
}

// fonction permettant de supprimer un tag de theTags (donc de l'affichage) en props dans le component TagDelete
const handleDeleteTag =(oneTag) => {
  const newTagsList = theTags.filter(eltTag => eltTag.title !== oneTag.title);
  setTheTags(newTagsList);
};

// affichage des tags
let displayTags = <View><Text style={{color : "#0031B8"}} key={0}>Pas de tag crée pour l'instant</Text></View>
  if(theTags.length>0){
      displayTags = theTags.map((eltTag, index)=> {
          return (<TagDelete tag= {eltTag} key={index} handleDeleteTag={handleDeleteTag}/>)
      })
  } 
  

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
       {/* Modal à afficher */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
        <TagsDefinition handleCloseModal={handleCloseModal} 
                      // contact={contacts[1]}
                      // user={null}
                      addTags = {addTags} />
          </View>
      </Modal> 
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
      {/* <View style={styles.icon}>
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
      </View> */}
      {/* INPUTS */}
      <View style={styles.caseBody}>
        {/* PRENOM */}
          <TextInput
              style={styles.inputPrenom}
              placeholder="Prénom"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setLastName(value)}
              value={lastName}
          />
          {/* NOM */}
          <TextInput
              style={styles.inputPrenom}
              placeholder="Nom"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setFirstName(value)}
              value = {{firstName}}
          />
          {/* DOB */}
          <TextInput
              style={styles.inputPrenom}
              placeholder="Date de naissance"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setDob(value)}
            value = {dob}
          />  
          {/* PHONE PERSO*/}
          <TextInput
              style={styles.inputPrenom}
              placeholder="N° de téléphone n°1"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setPhoneNr1(value)}
              value = {phonenr1}
          />  
            {/* PHONE 2 */}
            <TextInput
              style={styles.inputPrenom}
              placeholder="N° de téléphone n°2"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setPhoneNr2(value)}
              value = {phonenr2}
            /> 
            {/* MAIL N°1 */}
            <TextInput
              style={styles.inputPrenom}
              placeholder="Email n°1"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setEmail1(value)}
              value = {email1}
            />
            {/* MAIL N°2 */}
            <TextInput
              style={styles.inputPrenom}
              placeholder="Email n°2"
              placeholderTextColor="#DCDCDC"
              onChangeText={(value) => setEmail2(value)}
              value = {email2}
            />  
      </View>  
        {/*Debut Tags*/}
        <View style={styles.validateTagContainer}>
          {displayTags}
        </View> 
        {/* BOUTONS */}
        <View style={styles.bottomContainer}>
        <TouchableOpacity
        style={styles.btnAddTag}
        onPress={() => handleAddTags()}
      >
        <Text>+TAGS</Text>
      </TouchableOpacity>
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

  bottomContainer :{
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    paddingLeft : 20,
    marginRight:100,
    paddingRight:100
},

validateTagContainer: {
  flexDirection : "row",
  width : "100%",
  flexWrap: "wrap",
},

btnAddTag : {
  backgroundColor : "red",
  width : 50,
  height : 50,
},
});
