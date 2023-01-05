import React from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesomeIcon from '@expo/vector-icons'
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTags } from "../reducers/contacts";
import { updateTagsPerso } from "../reducers/users";
import { updateArrayTags } from "../module/toolsReducers";

import TagDelete from "./TagDelete";
import Tag from "./Tag";
import { styles } from "../assets/Style";

const writeColor = "#0046CF";
const theColors = {
  blueOne: "#2FBAE5",
  blueTwo: "#2F6DE5",
  green: "#21AC14",
  orange: "#E5712F",
  yellow: "#EDC808",
  red: "#D90000",
  pink: "#E52F92",
  purple: "#952FE5",
};

// la props contient :
//                     une fonction handleCloseModal qui permet de fermer la modal contenant ce composant
//                     un objet user qui prend null si non concerné
//                     un objet contact qui prend null si non concerné
function TagsDefinition(props) {
  const [inputTag, setInputTag] = useState("");
  const [listTags, setListTags] = useState([]);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);

  // fonctions gérant le click sur les couleurs
  const handlePressColor = (colorClick) => {
    setListTags([
      ...listTags,
      { title: inputTag.trim(), color: colorClick, border: "none" },
    ]); //.trim() permet d'éviter les espaces ajouter par inadvertance
    setInputTag("");
  };

  const handlePressColorBlank = () => {
    setListTags([
      ...listTags,
      { title: inputTag.trim(), color: "white", border: "#0046CF" },
    ]);
    setInputTag("");
  };

  //  fonction gérant la fermeture en cliquant sur la croix
  const handleClose = () => {
    setListTags([]);
    setInputTag("");
    props.handleCloseModal();
  };

  // fonction gérant la validation des tags
  const handleValidate = () => {
    // on enregistre dans le bon reducer
    // if(props.user !== null){
    //     dispatch(updateTagsPerso(updateArrayTags(props.user.tagsPerso, listTags)));
    // }
    // if(props.contact !== null){
    //     const indexContact = contacts.findIndex(elt => elt.lastName === props.contact.lastName && elt.firstName === props.contact.firstName);
    //     if(indexContact !== -1){
    //         dispatch(setTags({indexContact : indexContact, tags: updateArrayTags(props.contact.tags, listTags)}));
    //     }
    //}

    // on renvoit les données dans la page où la modal s'ouvre seulement s'il y a eu des tags rajoutés
    if (listTags.length > 0) {
      props.addTags(listTags);
    }

    props.handleCloseModal();
  };

  // fonction permettant de supprimer un tag de listTags (donc de l'affichage)
  const handleDeleteTag = (oneTag) => {
    const newTagsList = listTags.filter(
      (eltTag) => eltTag.title !== oneTag.title
    );
    setListTags(newTagsList);
  };

  // affichage des tags à choisir
  const tagsChoiceDisplay = Object.keys(theColors).map((keyColor, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ width: "50%", justifyContent: "center" }}
        onPress={() => handlePressColor(theColors[keyColor])}
      >
        <Tag
          tag={{ title: inputTag, color: theColors[keyColor], border: "none" }}
          size={"80%"}
          key={index}
        />
      </TouchableOpacity>
    );
  });
  tagsChoiceDisplay.unshift(
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: "50%" }}
      onPress={() => handlePressColorBlank()}
    >
      <Tag
        tag={{ title: inputTag, color: "white", border: "#0046CF" }}
        size={"80%"}
        key={50}
      />
    </TouchableOpacity>
  );

  // affichage des tags crées
  let tagValidateDisplay = (
    <View>
      <Text style={styles.noTagCreatedYetMsg} key={0}>
        Vous n'avez pas encore créé de tag.
      </Text>
    </View>
  );
  if (listTags.length > 0) {
    tagValidateDisplay = listTags.map((eltTag, index) => {
      return (
        <TagDelete tag={eltTag} key={index} handleDeleteTag={handleDeleteTag} />
      );
    });
  }

  return (
    <KeyboardAvoidingView style={styles.kav}>

              <View style={styles.globalContainer}>
        <ScrollView style={{flex: 1} }>


        <View style={styles.closeIconContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleClose()}>
            <Entypo name="cross" size={25} color={writeColor} />
          </TouchableOpacity>
        </View>

        <Text style={styles.p}>Ajoutez des tags à votre profil :</Text>


        {/* ETAPE 1 */}
        <Text style={styles.textOverInput}>
          Étape 1 : choisissez un nom de tag
        </Text>
        <View style={styles.tagNameAndNumCharContainer}>
          <TextInput
            style={styles.tagInput}
            placeholder={"Nom du tag"}
            maxLength={10}
            onChangeText={(value) => setInputTag(value)}
            value={inputTag}
          ></TextInput>
          <Text style={styles.p}>{inputTag.length}/10</Text>
        </View>

        {/* ETAPE 2 */}
        <Text style={styles.textOverInput}>
          Étape 2 : choisissez une couleur
        </Text>

        <View style={styles.tagContainer}>{tagsChoiceDisplay}</View>


        {/* ETAPE 3 */}
        <Text style={styles.textOverInput}>
          Étape 3 : visualisez les tags créés
        </Text>
        <ScrollView
          style={styles.createdTagScrollView}
          contentContainerStyle={styles.contentContainer}
          persistentScrollbar={true}
        >
          <View style={styles.validateTagContainer}>{tagValidateDisplay}</View>
        </ScrollView>

        {/* BOUTON VALIDER */}
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.tagCreationValidateBtn}
            onPress={() => handleValidate()}
          >
            <Text style={{ color: "#FFFFFF", fontFamily: "Poppins-Regular" }}>Valider</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
            </View>
    </KeyboardAvoidingView>
  );
}

export default TagsDefinition;
