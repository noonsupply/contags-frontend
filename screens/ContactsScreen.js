import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {updateContact } from "../reducers/contacts";
import { updateArrayContacts, updateArrayTags } from "../module/toolsReducers";
import { setAdress } from "../module/adressIP";
import TagsDefinition from "../components/TagsDefinition";
import TagDelete from "../components/TagDelete";
import { SafeAreaView } from "react-native-safe-area-context";
import {handleInputPhone, handleInputMails} from "../module/toolsCheckFormat";

const BACKEND_ADDRESS = setAdress();

export default function ContactsScreen({ route, navigation }) {
  const dispatch = useDispatch();

  // recupération des contacts et du user
  const contacts = useSelector((state) => state.contacts.value);
  const user = useSelector((state) => state.users.value);


  // définition des états associés aux TextInput
  const [lastName, setLastName] = useState(route.params.lastName);
  const [firstName, setFirstName] = useState(route.params.firstName);
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

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  //initialisation des états
  useEffect(() => {
    // recherche du contact
    const indexContact = contacts.findIndex(
      (elt) =>
        elt.lastName === route.params.lastName &&
        elt.firstName === route.params.firstName
    );
    // si le contact existe on initialise les TextInput et les tags avec ses données
    if (indexContact !== -1) {
      const dataContact = contacts[indexContact];
      setTheContactUpdating(dataContact);
      setDob(dataContact.dob);
      dataContact.emails.length > 0 ? setEmail1(dataContact.emails[0].email) : setEmail1("");
      dataContact.emails.length > 1 ? setEmail2(dataContact.emails[1].email): setEmail2("");
      dataContact.phones.length > 0 ? setPhoneNr1(dataContact.phones[0].number): setPhoneNr1("");
      dataContact.phones.length > 1 ? setPhoneNr1(dataContact.phones[1].number): setPhoneNr2("");
      setTheTags(dataContact.tags);
    }
    // le contact n'est pas trouvé dans le rédcuer on retourne à la page HomeScreen
    if (indexContact === -1) {
      alert("Contact non trouvé");
      navigation.navigate("HomeScreen");
    }
  }, []);
  //fin initialisation des états

  //Revenir en arrière avec le bouton "<"
  const handleReturn = () => {
    navigation.navigate("HomeScreen");
  };

  // Function to validate e-mail address
  const [onClick, setOnClick] = useState(false);
  function EmailAddressAlert() {
    if (email1 && !EMAIL_REGEX.test(email1) && onClick) {
      return (
        <View>
          <Text color={"red"}>Veuillez saisir une adresse email valide.</Text>
        </View>
      );
    }
  }

  // fonction gérant la validation des changements (on considère qu'on a changé de page si le contact n'a pas été trouvé )
  const handleSubmit = () => {
    // vérification du mail1
    setOnClick(true);
    if (email1 && !EMAIL_REGEX.test(email1)) {
      return;
    }

    // récupération des informations dans les TextInput pour les téléphones et les mails
    const phonesInput = handleInputPhone(phonenr1, phonenr2, theContactUpdating);
    const emailsInput = handleInputMails(email1, email2, theContactUpdating);

    // création du contact avec les nouvelles données
    const newDatasContact = {
      lastName: lastName,
      firstName: firstName,
      dob: dob,
      phones: phonesInput,
      emails: emailsInput,
      tags: theTags,
      contactedTimesCounter: theContactUpdating.contactedTimesCounter,
    };

    // mise à jour du tableau avec tous les contacts
    const newArrayContacts = updateArrayContacts(
      contacts,
      {lastName: route.params.lastName ,firstName: route.params.firstName},
      newDatasContact
    );

    // enregistrement en DB
    fetch(`${BACKEND_ADDRESS}/users/addAllContact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        contacts: newArrayContacts,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          // mise à jour du contact dans le réducer (recherche du contact dans le tableau de contact (avec le nom et prénon de départ) pour index)
          const indexContact = contacts.findIndex(
            (elt) =>
              elt.lastName === route.params.lastName &&
              elt.firstName === route.params.firstName
          );
          dispatch(
            updateContact({
              indexContact: indexContact,
              newDatas: newDatasContact,
            })
          );
          navigation.navigate("HomeScreen");
        }
      });
  }; // end fonction handleSubmit

  // fonction pour gérer la fermeture de la modal des tags
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // fonction se déclenchant au click sur le bouton +Tags
  const handleAddTags = () => {
    setModalVisible(true);
  };

  // fonction pour gérer l'ajout des tags dans la modale (on considère que le contact existe sinon on est revenu à la page précédente)
  const addTags = (tagsFromModal) => {
    setTheTags(updateArrayTags(theTags, tagsFromModal));
  };

  // fonction permettant de supprimer un tag de theTags (donc de l'affichage) en props dans le component TagDelete
  const handleDeleteTag = (oneTag) => {
    const newTagsList = theTags.filter(
      (eltTag) => eltTag.title !== oneTag.title
    );
    setTheTags(newTagsList);
  };

  // affichage des tags
  let displayTags = (
    <View>
      <Text style={{ color: "#0031B8" }} key={0}>
        Pas de tag crée pour l'instant
      </Text>
    </View>
  );
  if (theTags && theTags.length > 0) {
    displayTags = theTags.map((eltTag, index) => {
      return (
        <TagDelete tag={eltTag} key={index} handleDeleteTag={handleDeleteTag} />
      );
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
        {/* Modal à afficher */}
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <TagsDefinition
                handleCloseModal={handleCloseModal}
                addTags={addTags}
              />
            </View>
          </Modal>
          {/* Contenu de la page à afficher */}
          <View style={styles.caseHeader}>
            <View style={styles.header}>
              <FontAwesome
                name="chevron-left"
                size={20}
                color="#0031B8"
                onPress={() => handleReturn()}
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
            <View style={styles.nameandfirst}>
              {/*Debut input de Nom*/}
              <Text style={styles.colorText}>Nom</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  placeholder="Nom"
                  onChangeText={(value) => setLastName(value)}
                  value={lastName}
                />
              </View>
              {/*Debut input de Prénom*/}
              <Text style={styles.colorText}>Prénom</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  placeholder="Prénom"
                  onChangeText={(value) => setFirstName(value)}
                  value={firstName}
                ></TextInput>
              </View>
            </View>
            <View style={styles.nameandfirst}>
              {/*Debut date de naissance*/}
              <Text style={styles.colorText}>Date de Naissance</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  placeholder="Date de Naissance"
                  onChangeText={(value) => setDob(value)}
                  value={dob}
                ></TextInput>
              </View>
            </View>
            <View style={styles.nameandfirst}>
              {/*Debut num perso*/}
              <Text style={styles.colorText}>Numéro Perso</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  onChangeText={(value) => setPhoneNr1(value)}
                  value={phonenr1}
                ></TextInput>
              </View>

              {/*Debut num pro*/}
              <Text style={styles.colorText}>Numéro Pro</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  onChangeText={(value) => setPhoneNr2(value)}
                  value={phonenr2}
                ></TextInput>
              </View>
            </View>
            <View style={styles.nameandfirst}>
              {/*Debut Mail perso*/}
              <Text style={styles.colorText}>Mail Perso</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  onChangeText={(value) => setEmail1(value)}
                  placeholder={"Email Perso"}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  value={email1}
                ></TextInput>
                <EmailAddressAlert onceClicked={onClick} />
              </View>

              {/*Debut Mail pro*/}
              <Text style={styles.colorText}>Mail Pro</Text>
              <View style={styles.casePrenom}>
                <TextInput
                  style={styles.inputPrenom}
                  onChangeText={(value) => setEmail2(value)}
                  placeholder={"Email Pro"}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  value={email2}
                ></TextInput>
              </View>
              {/*Debut Tags*/}
              <View style={styles.validateTagContainer}>{displayTags}</View>
              {/* BOUTONS BAS DE PAGE */}
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  style={styles.btnAddTag}
                  onPress={() => handleAddTags()}
                >
                  <Text style={styles.mettreajour}>Ajouter des Tags</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnUpdateContact}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.mettreajour}>Mettre à jour</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mettreajour: {
    color: "#0031B8",
    fontWeight: "600",
  },
  btnUpdateContact: {
    width: 100,
    backgroundColor: "#ffffff",
    borderColor: "#0031B8",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  caseHeader: {
    alignItems: "center",
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
    paddingHorizontal: 5,
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
  btnAddTag: {
    backgroundColor: "#ffffff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 2,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 50,
  },

  scroll: {
    height: 200,
    flex: 1,
    marginTop: 5,
    backgroundColor: "yellow",
  },

  validateTagContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  colorText: {
    color: "#0031B8",
    fontWeight: "600",
    marginLeft: "3%",
  },
});
