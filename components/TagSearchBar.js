import { Row } from 'antd';
import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text , StyleSheet,} from 'react-native';

import Tag from "./Tag";
import TagDelete from "./TagDelete";

const datas = [
  {title : "Nicolas", color : 'blue', border:"none"},
  {title : "Essai", color : 'blue', border:"none"},
  {title : "Test", color : 'blue', border:"none"},
  {title : "Magic", color : 'blue', border:"none"},
  {title : "YES", color : 'blue', border:"none"},
  {title : "Nico", color : 'blue', border:"none"},
  {title : "Trader", color : 'blue', border:"none"},
];

function TagSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayTags, setDisplayTags] = useState([]);
  const [tagsProposition, setTagsProposition] = useState([]);
  const [showOptions, setShowOptions] = useState(false);


  // fonction qui se déclenche quand le text change 
  const handleSearchInput = (query) => {
    // on récupère l'input et on affiche dans la FlatList tous les tags avec les lettres tapées
    setSearchQuery(query);
    setDisplayTags(datas.filter((elt) => elt.title.includes(query)));
    setShowOptions(true);
  };

  // fonction qui se déclenche lorsque l'utilisateur appui sur entrée
  const handleAddTag = (textValidate) => {
    if(textValidate.length>0){
      // un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
      setTagsProposition([...tagsProposition,{title : textValidate.trim(), color : "blue", border : "none"}])
      setDisplayTags(displayTags.filter((elt) => elt.title !== choice.title));
      setSearchQuery("");
    }else{
      // l'utilisateur semble vouloir valider sa recherche
      // setShowOptions(false);
    }
    
  }

  // fonction se déclenchant lorsque l'on clique sur un des tags proposés : un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
  const handleTagPress = (choice) => {
    setTagsProposition([...tagsProposition,choice])
    setDisplayTags(displayTags.filter((elt) => elt.title !== choice.title));
    setSearchQuery("");
  };

  // fonction permettant de supprimer un tag de displayTags (donc de l'affichage)
  const handleDeleteTag =(oneTag) => {
    setTagsProposition(tagsProposition.filter(eltTag => eltTag.title !== oneTag.title));
  };

  //affichage des tags
  const tagsSelected = tagsProposition.map((eltTag, index)=> {
      return <TagDelete tag = {eltTag} handleDeleteTag = {handleDeleteTag} key={index} />} 
  );

  return (
    <View style={styles.container}>
      {/* Affichage des tags choisi */}
      { tagsProposition.length>1 && (<View  style={styles.tagsContainer}>
          {tagsSelected}
      </View>)}
      {/* TextInput */}
      <View style={styles.containerInput}>{tagsProposition.length===1 && (<View>{tagsSelected}</View>)}<TextInput
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
          horizontal = {true}
          data={displayTags}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTagPress(item)}>
              <Tag tag={item} />
            </TouchableOpacity>
          )}
          // keyExtractor={(item) => item}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      // flexWrap: "wrap",
      height: "50%",
      width: "80%",
      backgroundColor: 'red',
      alignItems : "flex-start",
      justifyContent : "flex-start",
    },

    tagsContainer :{
      flexDirection : "row",
      backgroundColor : "green",
      width:"100%",
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
      flexDirection : "row",
    },

    
});

export default TagSearchBar;
