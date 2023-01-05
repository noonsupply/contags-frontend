import React from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import Tag from "./Tag";
import TagDelete from "./TagDelete";

import {
  getAllDatas,
  getAllTags,
  getAssociateTags,
  handleDisplayMatching,
  groupByThree,
  getContactsWithTagsSearching,
} from "../module/toolsSearchBar";



const tagColor = "#0046CF";

function TagSearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayTags, setDisplayTags] = useState([]);
  const [tagsSearching, setTagsSearching] = useState(props.tagsSearching);

  // pour afficher la liste de proposition 
  const [showList, setShowList] = useState(false);

  const contacts = useSelector((state) => state.contacts.value);

  // récupération de tous les tags des contacts
  const dataAllTags = getAllTags(contacts)
 

  // fonction qui se déclenche quand le text change
  const handleSearchInput = (query) => {
    // on récupère la valeur de l'input
    setSearchQuery(query);
    // si il n'y pas de tag encore validé, on propose des tags contenant les premières lettres tapées
    if (tagsSearching.length === 0 && dataAllTags) {
      setDisplayTags(groupByThree(handleDisplayMatching(dataAllTags, query)));
    }
    // affichage des propositions de tags
    setShowList(true);
  };

  // fonction qui se déclenche lorsque l'utilisateur appui sur entrée
  const handleAddTag = (textValidate) => {
    if (textValidate && textValidate.length > 0) {
      // un tag est validé : on l'ajoute dans l'affichage des tags cherchés
      setTagsSearching([...tagsSearching, textValidate.trim()]);
      // on propose les tags associés, mais on vérifie avant qu'il y a des tags
      if(dataAllTags.length>0){
        // on met à jour le tableau d'affichage en proposant que les tags associés à ceux dans la liste des tags cherchés
        const tempArray = tagsSearching;
        tempArray.push(textValidate.trim()); // on utilise un tableau temporaire sinon l'affichage ne se met pas à jour directement
        setDisplayTags(groupByThree(getAssociateTags(tempArray, contacts)));
      }

      setSearchQuery("");
    } else {
      // l'utilisateur semble vouloir valider sa recherche
    }
  };

  // fonction se déclenchant lorsque l'on clique sur un des tags proposés ; un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
  const handleTagPress = (choice) => {
    // const tempArray = tagsSearching;
    // on ajoute le tag choisi
    setTagsSearching([...tagsSearching, choice]);
    // on met à jour le tableau d'affichage (on le fait ici en raison de l'asynchronisité des états)
    const tempArray = tagsSearching;
    tempArray.push(choice.trim()); // on utilise un tableau temporaire sinon l'affichage ne se met pas à jour directement
    setDisplayTags(groupByThree(getAssociateTags(tempArray, contacts)));

    setSearchQuery("");
  };

  // fonction permettant de supprimer un tag de displayTags (donc de l'affichage)
  const handleDeleteTag = (oneTag) => {
    const newArray = tagsSearching.filter( (eltTag) => eltTag.toLowerCase() !== oneTag.title.toLowerCase());
    setTagsSearching(newArray);
    // s'il n'y a plus de tag cherché on n'affiche plus la liste de proposition
    if(newArray.length ===0){
      setShowList(false);
    }
  };

  // fonction permettant d'afficher sur une ligne de la FlatList ;  les tags sont regroupés par trois dans item
  const handleDisplayList = (item) => {
    // si les trois tags sont définis
    if (item.first && item.second && item.third) {
      return (
        <View style={[{ flexDirection: "row" }]}>
          <TouchableOpacity onPress={() => handleTagPress(item.first)}>
            <Tag tag={{ title: item.first, color: tagColor, border: "none" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTagPress(item.second)}>
            <Tag
              tag={{ title: item.second, color: tagColor, border: "none" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTagPress(item.third)}>
            <Tag tag={{ title: item.third, color: tagColor, border: "none" }} />
          </TouchableOpacity>
        </View>
      );
    }
    // cas où il n'y a pas de 3e tag
    if (item.third === undefined && item.second) {
      return (
        <View style={[{ flexDirection: "row" }]}>
          <TouchableOpacity onPress={() => handleTagPress(item.first)}>
            <Tag tag={{ title: item.first, color: tagColor, border: "none" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTagPress(item.second)}>
            <Tag
              tag={{ title: item.second, color: tagColor, border: "none" }}
            />
          </TouchableOpacity>
        </View>
      );
    }
    // cas où il n'y a qu'un seul tag
    if (item.second === undefined && item.first) {
      return (
        <View style={[{ flexDirection: "row" }]}>
          <TouchableOpacity onPress={() => handleTagPress(item.first)}>
            <Tag tag={{ title: item.first, color: tagColor, border: "none" }} />
          </TouchableOpacity>
        </View>
      );
    }
  };

  // fonction se déclenchant quand on presse le bouton search (sert à renvoyer à la page parente les données trouvées par la recherche)
  // results sera un objet avec deux clés : contactsMatchAllTags et contactsAnyTags
  const handleBtnSearch = () => {
    // sécurité : on effectue la recherche uniquement s'il y a des tags séléctionné
    if(tagsSearching.length>0){
      props.btnSearch({searching: tagsSearching, results: getContactsWithTagsSearching(tagsSearching, contacts),});
    }
    
  };

  // constante d'affichage des tags sélectionnés
  const tagsSelected = tagsSearching.map((eltTag, index) => {
    return (
      <TagDelete
        tag={{ title: eltTag, color: tagColor, border: "none" }}
        handleDeleteTag={handleDeleteTag}
        key={index}
      />
    );
  });

  // gestion de l'affichage de la list selon si il y a déjà des tags séléctionné (cas du multiligne non traité pour l'instant)
  let positionListTop = 60;
  if (tagsSearching.length > 0) {
    positionListTop = 100;
  }

  return (
    <View style={styles.container}>
      {/* Affichage des tags choisi */}
      <View style={styles.tagsContainer}>{tagsSelected}</View>
      {/* TextInput */}
      <View style={styles.containerInput}>
        <TextInput
          value={searchQuery}
          onChangeText={handleSearchInput}
          placeholder={"Recherche par tags"}
          style={styles.input}
          onSubmitEditing={(event) => {
            handleAddTag(event.nativeEvent.text);
          }}
        />
        <TouchableOpacity onPress={() => handleBtnSearch()} style={styles.btn}>
          <Text>
            <FontAwesome size={18} color="#ffffff" name="search" />
          </Text>
          {/* <Text>🔎</Text> */}
        </TouchableOpacity>
      </View>
      {/* Affichage de la liste de proposition */}
      {showList && (
        <FlatList
          style={[styles.list, { top: positionListTop }]}
          data={displayTags}
          ListEmptyComponent={<Text>Pas de tags à vous proposer</Text>}
          renderItem={({ item }) => handleDisplayList(item)}
          keyExtractor={(item) => item.first}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
    paddingRight: 5,
  },

  tagsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  containerInput: {
    marginLeft: 50,
    flexDirection: "row",
    width: "80%",
    height: 40,
    paddingRight: 15,
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    width: "75%",
    height: 35,
    marginLeft: "2%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: tagColor,
    borderWidth: 1,
    paddingLeft: 5,
  },

  btn: {
    backgroundColor: "#0046CF",
    width: "15%",
    height: 35,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    borderRadius: 5,
    marginHorizontal: 20,
    flexWrap: "wrap",
    left: 0,
    position: "absolute",
    width: "90%",
    opacity: 0.9,
    elevation: 20,
  },
});

export default TagSearchBar;
