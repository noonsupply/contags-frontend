import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setContact, updateContact } from "../reducers/contacts";
import { updateArrayContacts, updateArrayTags } from "../module/toolsReducers";
import { setAdress } from "../module/adressIP";
import TagsDefinition from "../components/TagsDefinition";
import TagDelete from "../components/TagDelete";


 const BACKEND_ADDRESS = setAdress();


export default function ContactScreen({ route, navigation }) {

const dispatch = useDispatch();

// recupération des contacts et du user
const contacts = useSelector((state) => state.contacts.value);
const user = useSelector((state) => state.users.value);

const personne = route.params;

// définition des états associés aux TextInput
const [lastName, setLastName] = useState(contacts[personne.key].lastName);
const [firstName, setFirstName] = useState(contacts[personne.key].firstName);
const [dob, setDob] = useState("");
const [phonenr1, setPhoneNr1] = useState("");
const [phonenr2, setPhoneNr2] = useState("");
const [email1, setEmail1] = useState("");
const [email2, setEmail2] = useState("");

// tableau avec les tags
const [theTags, setTheTags] = useState([]);

// données sur le contact avant changement
const [theContactUpdating, setTheContactUpdating] = useState(null);

// gestion de l'affichage de la modal 
const [modalVisible, setModalVisible] = useState(false);

//sauvegarde des données du contact choisi (car posibilité de changement)
const chosenContact = {
  lastName: contacts[personne.key].lastName,
  firstName: contacts[personne.key].firstName,
};

//initialisation des états
useEffect(() => {
  // recherche du contact
  const indexContact = contacts.findIndex(
    (elt) =>
      elt.lastName === contacts[personne.key].lastName &&
      elt.firstName === contacts[personne.key].firstName
  );
  
  // si le contact existe on initialise les TextInput et les tags avec ses données
  if (indexContact !== -1) {
    const dataContact = contacts[indexContact];
    setTheContactUpdating(dataContact);
    setDob(dataContact.dob);
    dataContact.emails.length >0 ? setEmail1(dataContact.emails[0].email) : setEmail1("");
    dataContact.emails.length >1 ? setEmail2(dataContact.emails[1].email) : setEmail2("");  
    dataContact.phones.length >0 ? setPhoneNr1(dataContact.phones[0].number) : setPhoneNr1("");
    dataContact.phones.length >1 ? setPhoneNr1(dataContact.phones[1].number) : setPhoneNr2(""); 
    setTheTags( dataContact.tags);
  }
  // initialisation des états pour les TextInput
  if (indexContact === -1) {
    console.log("A faire : message alerte contact non trouvé")
    navigation.navigate("HomeScreen");
  }

}, []);
//fin initialisation des états



// fonction gérant la validation des changements (on considère qu'on a changé de page si le contact n'a pas été trouvé )
const handleSubmit = () => {
  // récupération des informations dans les TextInput 
  const phonesInput = [];
  if(phonenr1){
    let typePhone1 ="";
    theContactUpdating.phones.length>0 ? typePhone1=theContactUpdating.phones[0].typePhone : typePhone1="home";
    phonesInput.push({phoneType : typePhone1, number: phonenr1, areaCode:"", country: ""})
  }

  if(phonenr2){
    let typePhone2 ="";
    theContactUpdating.phones.length>1 ? typePhone2=theContactUpdating.phones[1].typePhone : typePhone2="home";
    phonesInput.push({phoneType : typePhone2, number: phonenr2, areaCode:"", country: ""})
  }

  const emailsInput = [];
  if(email1){
    let typeEmail1 ="";
    theContactUpdating.emails.length>0 ? typeEmail1=theContactUpdating.emails[0].emailType : typeEmail1="personnal";
    emailsInput.push({emailType: typeEmail1 , email: email1})
  }

  if(email2){
    let typeEmail2 ="";
    theContactUpdating.emails.length>1 ? typeEmail2=theContactUpdating.emails[1].emailType : typeEmail2="personnal";
    emailsInput.push({emailType: typeEmail2 , email: email2})
  }

  // création du contact avec les nouvelles données
  const newDatasContact = {
    lastName: lastName,
    firstName: firstName,
    dob: dob,
    phones:phonesInput,
    emails: emailsInput,
    tags : theTags,
    contactedTimesCounter : theContactUpdating.contactedTimesCounter
  }

  // mise à jour du tableau avec tous les contacts
  const newArrayContacts = updateArrayContacts(contacts, chosenContact, newDatasContact);
  
  // enregistrement en DB
  fetch(`${BACKEND_ADDRESS}/users/addAllContact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: "cYQKAKkl-7L05bFTvzEUdU1ZyQN1NbY5", // user.token,
      contacts: newArrayContacts ,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.result){
        // mise à jour du contact dans le réducer (recherche du contact dans le tableau de contact (avec le nom et prénon de départ) pour index)
        const indexContact = contacts.findIndex((elt) =>
            elt.lastName === contacts[personne.key].lastName &&
            elt.firstName === contacts[personne.key].firstName
        );
        dispatch(updateContact({indexContact: indexContact , newDatas : newDatasContact}));

        navigation.navigate("HomeScreen");
      }
    });
}; // end fonction handleSubmit

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
  console.log('addTags', tagsFromModal)
  console.log('update', updateArrayTags(theContactUpdating.tags,tagsFromModal))
  setTheTags(updateArrayTags(theContactUpdating.tags,tagsFromModal))
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
     {/* <View style={styles.caseHeader}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={20} color="#0031B8" />
        <Entypo.Button
          //onPress={() => {toggleDrawer}}
          name="dots-three-vertical"
          size={24}
          color="#0031B8"
        />
      </View>
    </View>
    <View style={styles.icon}>
      <FontAwesome name="user-circle" size={100} color="#0031B8" />
    </View>
    <View style={styles.fastAction}>
      <FontAwesome name="phone" size={30} color="#0031B8" />
      <Entypo name="message" size={30} color="#0031B8" />
      <FontAwesome name="envelope" size={30} color="#0031B8" />
      <FontAwesome name="paper-plane" size={30} color="#0031B8" />
    </View>
    <View style={styles.caseBody}>
      <Text>DEBUT</Text> */}
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
             value= {firstName}>
          </TextInput>
        </View>
      </View>
       <View style={styles.nameandfirst}> 
        {/*Debut date de naissance*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            onChangeText={(value) => setDob(value)}
            value={dob}
          >
          </TextInput>
        </View>
      <View style={styles.nameandfirst}>
        {/*Debut num perso*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            onChangeText={(value) => setPhoneNr1(value)}
            value={phonenr1}
          >
          </TextInput>
        </View>
        {/*Debut num pro*/}
        <View style={styles.casePrenom}>
          <TextInput
            style={styles.inputPrenom}
            onChangeText={(value) => setPhoneNr2(value)}
            value= {phonenr2}>
          </TextInput>
        </View>
      </View>
      {/*Debut Mail perso*/}
      <View style={styles.casePrenom}>
        <TextInput
          style={styles.inputPrenom}
          onChangeText={(value) => setEmail1(value)}
          value={email1}>
        </TextInput>
      </View>
      {/*Debut Mail pro*/}
      <View style={styles.casePrenom}>
        <TextInput
          style={styles.inputPrenom}
          onChangeText={(value) => setEmail2(value)}
          value={email2}>
        </TextInput>
      </View>
      {/*Debut Tags*/}
            <View style={styles.validateTagContainer}>
              {displayTags}
            </View> 
      {/* BOUTONS BAS DE PAGE */}
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
        <Text>Mettre à jour</Text>
      </TouchableOpacity></View>  
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
  flexDirection: "column",
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
btnAddTag : {
  backgroundColor : "red",
  width : 50,
  height : 50,
},

bottomContainer :{
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    paddingLeft : 20,
    marginRight:100,
    paddingRight:100
},

scroll:{
  height : 200,
  flex : 1,
  marginTop : 5,
  backgroundColor : "yellow",
},

validateTagContainer: {
   flexDirection : "row",
   width : "100%",
   flexWrap: "wrap",
},
});