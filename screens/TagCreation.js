import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Tag from "../components/Tag";
import { setAdress } from "../module/adressIP";
import { SafeAreaView } from "react-native-safe-area-context";
import TagDelete from "../components/TagDelete";
import { updateArrayTags } from "../module/toolsReducers";
import TagsDefinition from "../components/TagsDefinition";
import { updateTagsPerso } from "../reducers/users";
import { styles } from "../assets/Style";

const BACKEND_ADDRESS = setAdress();

export default function TagCreation({ navigation }) {
  const [tagArr, setTagArr] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

  // Fonctions de navigation
  const handleSubmit = () => {
    fetch(`${BACKEND_ADDRESS}/users/saveTagsPerso`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        tagsPerso: selectedTags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(updateTagsPerso(selectedTags));
          navigation.navigate("HomeLoadContact");
        }
      });
  };

  const handleSkip = () => {
    navigation.navigate("HomeLoadContact");
  };

  const handleReturn = () => {
    navigation.navigate("ProfileCreation");
  };

  useEffect(() => {
    fetch(`${BACKEND_ADDRESS}/getProposedTags`)
      .then((response) => response.json())
      .then((data) => {
        setTagArr(data.proposedTags);
      });
  }, []);

  // Gestion des tags

  function addSelectedTag(newTag) {
    setSelectedTags(updateArrayTags(selectedTags, [newTag]));
  }

  const ProposedTags = tagArr.map((element, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => addSelectedTag(element)}>
        <Tag tag={element} key={index} />
      </TouchableOpacity>
    );
  });

  const handleDeleteTag = (selectedTag) => {
    const newTagList = selectedTags.filter(
      (tagElement) => tagElement.title !== selectedTag.title
    );
    setSelectedTags(newTagList);
  };

  const DisplaySelectedTags = selectedTags.map((element, index) => {
    return (
      <TagDelete tag={element} key={index} handleDeleteTag={handleDeleteTag} />
    );
  });

  // fonction pour gérer la fermeture de la modal des tags
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // fonction se déclenchant au click sur le bouton +Tags
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  // fonction pour gérer l'ajout des tags dans la modale (on considère que le contact existe sinon on est revenu à la page précédente)
  const addTags = (tagsFromModal) => {
    setSelectedTags(updateArrayTags(selectedTags, tagsFromModal));
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
            <Modal
              transparent={true}
              visible={modalVisible}
              animationType={"fade"}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View>
                <TagsDefinition
                  handleCloseModal={handleCloseModal}
                  addTags={addTags}
                />
              </View>
            </Modal>

            <View style={styles.tagCreationMainContainer}>
              <View style={styles.tagCreationTextContainer}>
                <Text style={styles.boldp}>Ajoutons des tags ensemble !</Text>

                <Text style={styles.p}>
                  Vous pouvez utiliser nos propositions pour ajouter des tags à
                  votre profil...
                </Text>
              </View>

              <View style={styles.tagTemplatesScrollViewContainer}>
                <ScrollView
                  style={styles.proposedTagsScrollView}
                  contentContainerStyle={styles.contentContainer}
                  // fadingEdgeLength={200}
                  persistentScrollbar={true}
                >
                  {ProposedTags}
                </ScrollView>
              </View>

              <View style={styles.tagCreationTextContainer}>
                <Text style={styles.p}>
                  ... et créer vos tags personnalisés en appuyant sur le bouton
                  ci-dessous.
                </Text>
              </View>

              <View style={styles.addTagBtnContainer}>
                <TouchableOpacity
                  style={styles.addTagBtn}
                  onPress={() => handleOpenModal()}
                >
                  <Text style={styles.btnWhiteText}>Créer un tag</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tagCreationTextContainer}>
                <Text style={styles.p}>
                  Supprimez les tags qui ne vous conviennent pas dans liste
                  ci-dessous, puis validez en appuyant sur le bouton en bas à
                  droite de l'écran.
                </Text>
              </View>

              <View style={styles.tagTemplatesScrollViewContainer}>
                <ScrollView
                  style={styles.selectedTagsScrollView}
                  contentContainerStyle={styles.contentContainer}
                  // fadingEdgeLength={200}
                  persistentScrollbar={true}
                >
                  {DisplaySelectedTags}
                </ScrollView>
              </View>
            </View>

            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={styles.navigationBtn}
                onPress={() => handleReturn()}
              >
                <FontAwesome color="#FFFFFF" name="chevron-left" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSkip}
                onPress={() => handleSkip()}
              >
                <Text style={styles.skipBtnText}>Passer cette étape</Text>
              </TouchableOpacity>

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
