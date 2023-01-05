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
          navigation.navigate("TagCreation");
        }
      });
  };

  const handleSkip = () => {
    navigation.navigate("HomeLoadContact");
  };

  const handleReturn = () => {
    navigation.navigate("ProfileCreation");
  };

  // Fonctions d'affichage conditionnel (données saisies dans ProfileCreation)

  function UserFirstName() {
    return (
      <View style={styles.automaticallyCreatedTag}>
        <Text style={styles.tagTextWhite}>{user.firstName}</Text>
      </View>
    );
  }

  function UserLastName() {
    return (
      <View style={styles.automaticallyCreatedTag}>
        <Text style={styles.tagTextWhite}>{user.lastName}</Text>
      </View>
    );
  }

  function UserPhoneNumber() {
    const userPhoneNumber = user.phones.map((mainPhoneNumber) => {
      return mainPhoneNumber.number;
    });
    return (
      <View style={styles.automaticallyCreatedTag}>
        <Text style={styles.tagTextWhite}>{userPhoneNumber}</Text>
      </View>
    );
  }

  function UserMainEmail() {
    return (
      <View style={styles.automaticallyCreatedTag}>
        <Text style={styles.tagTextWhite}>{user.emailMain}</Text>
      </View>
    );
  }

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
    console.log(newTag);
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

  // fonction se déclenchant au clich sur le bouton +Tags
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

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={{ flexGrow: 1 }}
        >

          <View style={styles.innerContainer}>

            <View style={styles.mainContainerNoLogo}>

              <Text style={styles.boldp}>Et voilà !</Text>

              <Text style={styles.p}>
                Les premiers tags associés à votre profil ont été créés
                automatiquement.
              </Text>

              <View style={styles.userTagsContainer}>

                <UserFirstName />
                <UserLastName />
                <UserPhoneNumber />
                <UserMainEmail />

              </View>

              <Text style={styles.p}>
                Désormais, un utilisateur de Contags pourra vous retrouver à
                l'aide de ces tags.
              </Text>

              <Text style={styles.boldp}>À vous de jouer maintenant !</Text>

              <Text style={styles.p}>
                Pour ajouter des tags à votre profil, appuyez sur le bouton en
                bas à droite de votre écran.
              </Text>

              <Text style={styles.p}>
                Pour modifier les informations de votre profil, appuyez sur le
                bouton en bas à gauche de votre écran.
              </Text>

              <Text style={styles.p}>
                Vous pouvez aussi passer l'étape de création de tags en cliquant
                sur le bouton ci-dessous.
              </Text>

              <View style={styles.skipBtnContainer}>

                <TouchableOpacity
                  style={styles.skipBtn}
                  onPress={() => handleSkip()}
                >
                  <Text style={styles.skipBtnText}>
                    Passer l'étape de création de tag
                  </Text>
                </TouchableOpacity>

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
