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
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, setContact } from "../reducers/contacts";
import { setAdress } from "../module/adressIP";
import TagsDefinition from "../components/TagsDefinition";
import TagDelete from "../components/TagDelete";
import {updateArrayTags } from "../module/toolsReducers";
import { SafeAreaView } from "react-native-safe-area-context";

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
    // Vérification si les champs sont renseignés
    if (lastName == "" && firstName == "") {
      alert("Veuillez renseigner le nom ou le prénom avant de continuer.");
      return false;
    }
    
    //création du contact : pour le nom des champs pour les téléphones et mail sont imposés
    const newContact = {
      lastName: lastName,
      firstName: firstName,
      dob: dob,
      phones: [
        { phoneType: "Home", number: phonenr1, areaCode: "", country: "" },
        { phoneType: "Other", number: phonenr2, areaCode: "", country: "" },
      ],
      emails: [
        { emailType: "Personnal", email: email1 },
        { emailType: "Other", email: email2 },
      ],
      tags: theTags,
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 0,
        emailCounter: 0,
      },
    };

    
    // enregistrement en DB
    fetch(`${BACKEND_ADDRESS}/users/createContact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        contacts: newContact,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(addContact(newContact));
          alert("Contact enregistré avec succés");
          navigation.navigate("HomeScreen");}
        }
      );
    
  }; // fin de handleSubmit

  // fonction pour gérer la fermeture de la modal des tags
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // fonction se déclenchant au clich sur le bouton +Tags
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
  if (theTags.length > 0) {
    displayTags = theTags.map((eltTag, index) => {
      return (
        <TagDelete tag={eltTag} key={index} handleDeleteTag={handleDeleteTag} />
      );
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      {/* Modal à afficher */}
      <SafeAreaView>
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
            // contact={contacts[1]}
            // user={null}
            addTags={addTags}
          />
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
      {/* INPUTS */}
      <View style={styles.caseBody}>
        {/* PRENOM */}

        <View style={styles.nameandfirst}>
          {/*Debut date de Nom*/}
          <Text style={styles.colorText}>Nom</Text>
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              placeholder="Nom"
              onChangeText={(value) => setLastName(value)}
              value={lastName}
            />
          </View>
          {/*Debut date de Prénom*/}
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
              placeholder="Numero Perso"
              onChangeText={(value) => setPhoneNr1(value)}
              value={phonenr1}
            ></TextInput>
          </View>

          {/*Debut num pro*/}
          <Text style={styles.colorText}>Numéro Pro</Text>
          <View style={styles.casePrenom}>
            <TextInput
              style={styles.inputPrenom}
              placeholder="Numéro Pro"
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
        </View>
      </View>
      {/*Debut Tags*/}
      <View style={styles.validateTagContainer}>{displayTags}</View>
      {/* BOUTONS */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btnAddTag}
          onPress={() => handleAddTags()}
        >
          <Text style={styles.mettreajour}>Ajouter des Tags</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnUpdateContact}
          onPress={() => handleSubmit()
          }
        >
          <Text style={styles.mettreajour}>Valider</Text>
        </TouchableOpacity>
      </View>
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
