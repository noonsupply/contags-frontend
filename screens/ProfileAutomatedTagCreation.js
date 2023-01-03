import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Modal,
  Touchable,
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
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{user.firstName}</Text>
      </View>
    );
  }

  function UserLastName() {
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{user.lastName}</Text>
      </View>
    );
  }

  function UserPhoneNumber() {
    const userPhoneNumber = user.phones.map((mainPhoneNumber) => {
      return mainPhoneNumber.number;
    });
    return (
      <View style={styles.tagFullDarkBlue}>
        <Text style={styles.tagTextWhite}>{userPhoneNumber}</Text>
      </View>
    );
  }

  function UserMainEmail() {
    return (
      <View style={styles.tagFullDarkBlue}>
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

      <View style={styles.mainContainerNoLogo}>
        <Text style={styles.h2}>Et voilà !</Text>

        <Text style={styles.p}>
          Les premiers tags associés à votre profil ont été créés automatiquement.
        </Text>

        <View style={styles.userTagsContainer}>
          <UserFirstName />
          <UserLastName />
          <UserPhoneNumber />
          <UserMainEmail />
        </View>

        <Text style={styles.h2}>À vous de jouer maintenant !</Text>

        <Text style={styles.p}>
          Pour créer les tags de votre profil, appuyez sur le bouton en bas à droite de votre écran.
        </Text>

        <Text style={styles.p}>
          Pour modifier les informations de votre profil, appuyez sur le bouton en bas à gauche de votre écran.
        </Text>


        <Text style={styles.p}>
          Vous pouvez aussi passer l'étape de création de tags en cliquant sur le bouton
          ci-dessous.
        </Text>

        <View style={styles.skipBtnView}>
        <TouchableOpacity style={styles.skipBtn} onPress={() => handleSkip()}>
          <Text style={styles.skipBtnText}>
            Passer l'étape de création de tag
          </Text>
        </TouchableOpacity>
        </View>



        {/* <Text style={styles.simpleText}>
          Vous pouvez, par exemple, utiliser nos propositions pour ajouter d'autres tags à votre profil.
        </Text>

        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.proposedTagsScrollView}
            contentContainerStyle={styles.contentContainer}
            fadingEdgeLength={200}
            persistentScrollbar={true}
          >
            {ProposedTags}
          </ScrollView>
        </View>

        <Text style={styles.simpleText}>
          Vous pouvez également créer vos propres tags personnalisés, en appuyant sur le bouton ci-dessous.
        </Text>

        <View style={styles.btnAddTagContainer}>
          <TouchableOpacity
            style={styles.btnAddTag}
            onPress={() => handleOpenModal()}
          >
            <Text style={styles.btnWhiteText}>Créer un tag</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.simpleText}>
          Vous pouvez aussi passer cette étape en cliquant sur le bouton en bas
          de l'écran.
        </Text>
        <Text style={styles.simpleText}>Vos tags :</Text>

        <ScrollView
          style={styles.selectedTagsScrollView}
          contentContainerStyle={styles.contentContainer}
          fadingEdgeLength={200}
          persistentScrollbar={true}
        >
          {DisplaySelectedTags}
        </ScrollView> */}
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => handleReturn()}
        >
          <FontAwesome color="#FFFFFF" name="chevron-left" />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.btnSkip} onPress={() => handleSkip()}>
          <Text style={styles.skipBtnText}>Passer cette étape</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => handleSubmit()}
        >
          <FontAwesome color="#FFFFFF" name="chevron-right" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   //  Views & Global container

//   sav: {
//     flex: 1,
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   globalContainer: {
//     flex: 1,
//     height: "100%",
//     width: "100%",
//     backgroundColor: "white",
//     paddingTop: 15,
//   },

//   // Main

//   mainContainer: {
//     height: "90%",
//   },

//   userTagsContainer: {
//     marginVertical: 5,
//     marginHorizontal: 25,
//     flexWrap: "wrap",
//     flexDirection: "row",
//     marginVertical: 10,
//     // backgroundColor: "red",
//   },

//   scrollViewContainer: {
//     height: "25%",
//   },

//   btnAddTagContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 15,
//   },

//   proposedTagsScrollView: {
//     // flexWrap: "wrap",
//     // flexDirection: "row",
//     // borderWidth: 1,
//     // borderColor: "#0031B8",
//     // borderRadius: 10,
//     paddingHorizontal: 3,
//     marginVertical: 15,
//     marginHorizontal: 25,
//   },

//   selectedTagsScrollView: {
//     // flexWrap: "wrap",
//     // flexDirection: "row",
//     // borderWidth: 1,
//     // borderColor: "#0031B8",
//     // borderRadius: 10,
//     paddingHorizontal: 3,
//     marginVertical: 15,
//     marginHorizontal: 25,
//   },

//   contentContainer: {
//     flexWrap: "wrap",
//     flexDirection: "row",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   // Text

//   textContainer: {
//     marginHorizontal: 25,
//     // backgroundColor: "yellow",
//   },

//   text: {
//     color: "#0031B8",
//     fontSize: 16,
//     fontWeight: "400",
//   },

//   input: {
//     borderRadius: 5,
//     backgroundColor: "#ffffff",
//     height: 45,
//     marginBottom: 25,
//     paddingLeft: 15,
//     paddingRight: 15,
//   },

//   inputText: {
//     marginLeft: 25,
//     marginRight: 25,
//   },

//   // Navigation

//   navigationContainer: {
//     // backgroundColor: "orange",
//     height: "10%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 25,
//   },

//   btnBack: {
//     alignItems: "center",
//     backgroundColor: "#0031B8",
//     borderRadius: 50,
//     height: 50,
//     justifyContent: "center",
//     width: 50,
//   },

//   btnForward: {
//     alignItems: "center",
//     backgroundColor: "#0031B8",
//     borderRadius: 50,
//     height: 50,
//     justifyContent: "center",
//     width: 50,
//   },

//   btnSkip: {
//     alignItems: "center",
//     backgroundColor: "#FFF",
//     borderRadius: 50,
//     height: 50,
//     justifyContent: "center",
//     paddingHorizontal: 10,
//   },

//   btnAddTag: {
//     alignItems: "center",
//     backgroundColor: "#0031B8",
//     borderRadius: 50,
//     height: 50,
//     justifyContent: "center",
//     width: 50,
//   },

//   btnText: {
//     color: "#0031B8",
//     fontSize: 14,
//     fontWeight: "bold",
//   },

//   btnWhiteText: {
//     color: "#FFFFFF",
//     fontSize: 14,
//     fontWeight: "bold",
//   },

//   // Tags

//   // templateTagContainer: {
//   //   alignItems: "flex-start",
//   //   flexDirection: "row",
//   //   flexWrap: "wrap",
//   //   // justifyContent: "center",
//   //   marginBottom: 15,
//   //   marginTop: 15,
//   //   paddingLeft: 25,
//   //   paddingRight: 25,
//   //   height: 250,
//   // },

//   tagTextBlue: {
//     color: "#0031B8",
//     fontSize: 14,
//     fontWeight: "bold",
//   },

//   tagTextWhite: {
//     color: "#FFFFFF",
//     fontSize: 14,
//     fontWeight: "bold",
//   },

//   tagFullDarkBlue: {
//     backgroundColor: "#0031B8",
//     alignItems: "center",
//     borderRadius: 20,
//     flexShrink: 1,
//     height: 30,
//     justifyContent: "center",
//     marginLeft: 0,
//     marginRight: 10,
//     marginVertical: 3,
//     paddingHorizontal: 10,
//   },

// });
