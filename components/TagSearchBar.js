// import { Row } from 'antd';
import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text , StyleSheet,} from 'react-native';
// import { getRelativeCoords } from 'react-native-reanimated';
import { useSelector } from 'react-redux';

import Tag from "./Tag";
import TagDelete from "./TagDelete";

import { getAllTags, getTagsCombination, getAssociateTags } from '../module/toolsSearchBar';



function TagSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayTags, setDisplayTags] = useState([]);
  const [tagsSearching, setTagsSearching] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const contacts = useSelector((state) => state.contacts.value);

  const dataAllTags = getAllTags(contacts);
  const dataCombinationsTags = getTagsCombination(contacts);
  console.log('Data',dataAllTags);


  // fonction qui se déclenche quand le text change 
  const handleSearchInput = (query) => {
    // on récupère la valeur de l'input 
    setSearchQuery(query);
    // si il n'y pas de tag encore validé, on propose des tags contenant les premières lettres tapées
    if(tagsSearching.length !==1){
        setDisplayTags(dataAllTags.filter((elt) => elt.includes(query)));
    }
    // s'il y a un tags validé, on propose les tags associés avec celui validé
    if(tagsSearching.length ===1){
        setDisplayTags(getAssociateTags(tagsSearching[0], contacts));
    }
    setShowOptions(true);
  };

  // fonction qui se déclenche lorsque l'utilisateur appui sur entrée
  const handleAddTag = (textValidate) => {
    if(textValidate.length>0){
      // un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
      setTagsSearching([...tagsSearching,{title : textValidate.trim(), color : "blue", border : "none"}])
      setDisplayTags(displayTags.filter((elt) => elt.title !== choice.title));
      setSearchQuery("");
    }else{
      // l'utilisateur semble vouloir valider sa recherche
      // setShowOptions(false);
    }
    
  }

  // fonction se déclenchant lorsque l'on clique sur un des tags proposés : un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
  const handleTagPress = (choice) => {
    setTagsSearching([...tagsSearching,choice])
    // si c'est le premier tag de validé on propose les tags associés 
    if(tagsSearching.length ===1){
        setDisplayTags(getAssociateTags(tagsSearching[0], contacts));
    }else{
        // on supprime le tag choisi de l'affichage
        setDisplayTags(displayTags.filter((elt) => elt.title !== choice.title));
    }
    
    setSearchQuery("");
  };

  // fonction permettant de supprimer un tag de displayTags (donc de l'affichage)
  const handleDeleteTag =(oneTag) => {
    setTagsSearching(tagsSearching.filter(eltTag => eltTag.title !== oneTag.title));
  };

  //affichage des tags
  const tagsSelected = tagsSearching.map((eltTag, index)=> {
      return <TagDelete tag = {{title : eltTag, color : "blue", border : "none"}} handleDeleteTag = {handleDeleteTag} key={index} />} );

 

  return (
    <View style={styles.container}>
      {/* Affichage des tags choisi */}
      <View  style={styles.tagsContainer}>
          {tagsSelected}
      </View>
      {/* TextInput */}
      <View style={styles.containerInput}>
        <TextInput
        value={searchQuery}
        onChangeText={handleSearchInput}
        placeholder="Press enter to add tag"
        style={styles.input}
        onSubmitEditing={event =>{handleAddTag(event.nativeEvent.text)}}
      /></View>
      {/* Affichage de la liste de proposition */}
      {showOptions && (
        <FlatList
          style={styles.list}
          data={displayTags}
          renderItem={({ item }) => (
             <TouchableOpacity onPress={() => handleTagPress(item)}>
              <Tag tag={{title : item, color : "blue", border : "none"}} />
             </TouchableOpacity>
          )}
           keyExtractor={(item) => item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      // flexWrap: "wrap",
      height: 60,
      width: "80%",
      backgroundColor: 'red',
      alignItems : "flex-start",
      justifyContent : "flex-start",
      marginTop : 10,
    },

    tagsContainer :{
      flexDirection : "row",
      backgroundColor : "green",
      width:"100%",
      height:30,
    },

    containerInput:{
        flexDirection : "row",
        backgroundColor : "orange",
        width:"100%",
    },

    input:{
      backgroundColor: 'white',
      width: "90%",
      height : 30,
      marginLeft : "2%"
    },
    list:{
      backgroundColor: 'yellow',
        borderRadius: 5,
        flexWrap: "wrap",
        zIndex :10,
        top: 31,
        left: 0,
        position: "absolute",
        width : "90%",
    },

    
});

export default TagSearchBar;