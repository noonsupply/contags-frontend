import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text , StyleSheet,} from 'react-native';
import { useSelector } from 'react-redux';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Tag from "./Tag";
import TagDelete from "./TagDelete";

import { getAllDatas, getAllTags, getTagsCombination, getAssociateTags, handleDisplayMatching, arrayFilter, groupByThree, getContactsWithTagsSearching } from '../module/toolsSearchBar';
import { OmitProps } from 'antd/es/transfer/ListBody';

const tagColor = "#0031B8";

function TagSearchBar(props) {
  

  const [searchQuery, setSearchQuery] = useState('');
  const [displayTags, setDisplayTags] = useState([]);
  const [tagsSearching, setTagsSearching] = useState(props.tagsSearching);
  const [tagsSearchingGroup, setTagsSearchingGroup] = useState([]);
  const [showList, setShowList] = useState(false);

  const contacts = useSelector((state) => state.contacts.value);

  const dataAllTags = getAllTags(contacts);
// const dataAllTags =   getAllDatas(contacts);
  const dataCombinationsTags = getTagsCombination(contacts);
  // console.log('Data',dataAllTags);

  // fonction qui se déclenche quand le text change 
  const handleSearchInput = (query) => {
    // on récupère la valeur de l'input 
    setSearchQuery(query);
    // si il n'y pas de tag encore validé, on propose des tags contenant les premières lettres tapées
    if(tagsSearching.length ===0){
        setDisplayTags(groupByThree(handleDisplayMatching(dataAllTags,query)));
    }
    setShowList(true);
  };

  // fonction qui se déclenche lorsque l'utilisateur appui sur entrée
  const handleAddTag = (textValidate) => {
    if(textValidate && textValidate.length>0){
      // un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
       setTagsSearching([...tagsSearching, textValidate.trim()])
       const tempArray = tagsSearching;
       // on met à jour le tableau d'affichage (on le fait ici en raison de l'asynchronisité des états)
       tempArray.push(textValidate.trim())
       //setDisplayTags(getAssociateTags(tempArray, contacts));
      //  setDisplayTags(groupByPeer(getAssociateTags(tempArray, contacts)));
      setDisplayTags(groupByThree(getAssociateTags(tempArray, contacts)))
       setSearchQuery("");
    }else{
      // l'utilisateur semble vouloir valider sa recherche
      // setShowOptions(false);
    }
    
  }

  // fonction se déclenchant lorsque l'on clique sur un des tags proposés ; un tag est validé : on l'ajoute dans l'affichage et on le retire de la FlatList
  const handleTagPress = (choice) => {
      const tempArray = tagsSearching;
      // on ajoute le tag choisi
      setTagsSearching([...tagsSearching,choice])
      // on met à jour le tableau d'affichage (on le fait ici en raison de l'asynchronisité des états)
      tempArray.push(choice)
      //setDisplayTags(getAssociateTags(tempArray, contacts));
      setDisplayTags(groupByThree(getAssociateTags(tempArray, contacts)));
      // on supprime le tag choisi de l'affichage
      // setDisplayTags(arrayFilter(tagsSearching,displayTags));

      setSearchQuery("");
  };

  // fonction permettant de supprimer un tag de displayTags (donc de l'affichage)
  const handleDeleteTag =(oneTag) => {
    setTagsSearching(tagsSearching.filter(eltTag => eltTag.toLowerCase() !== oneTag.title.toLowerCase()));
  };
  
  // fonction permettant d'afficher dans la FlatList
  const handleDisplayList =(item) =>{
    if(item.first && item.second && item.third){
        return(<View style={[{flexDirection : "row"}]} >
                <TouchableOpacity onPress={() => handleTagPress(item.first)}>
                <Tag tag={{title : item.first, color : tagColor, border : "none"}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTagPress(item.second)}>
                <Tag tag={{title : item.second, color : tagColor, border : "none"}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTagPress(item.third)}>
                <Tag tag={{title : item.third, color : tagColor, border : "none"}} />
                </TouchableOpacity>
              </View>)
    }
    // cas où le dernier n'est pas défini
    if(item.third === undefined && item.second){
      return(<View style={[{flexDirection : "row"}]} >
                <TouchableOpacity onPress={() => handleTagPress(item.first)}>
                <Tag tag={{title : item.first, color : tagColor, border : "none"}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTagPress(item.second)}>
                <Tag tag={{title : item.second, color : tagColor, border : "none"}} />
                </TouchableOpacity>
              </View>)
    }
    // cas où le second n'est pas défini
    if(item.second === undefined && item.first){
      return(<View style={[{flexDirection : "row"}]} >
                <TouchableOpacity onPress={() => handleTagPress(item.first)}>
                <Tag tag={{title : item.first, color : tagColor, border : "none"}} />
                </TouchableOpacity>
              </View>)
    }
  }

  // fonction se déclenchant quand on presse le bouton search (sert à renvoyer à la page parente les données trouvées par la recherche)
  const handleBtnSearch = () =>{
    console.log('ici');
    props.btnSearch({searching: tagsSearching, results: getContactsWithTagsSearching(tagsSearching, contacts)});
}
  

  // affichage des tags sélectionnés
const tagsSelected = tagsSearching.map((eltTag, index)=> {
    return <TagDelete tag = {{title : eltTag, color : tagColor, border : "none"}} handleDeleteTag = {handleDeleteTag} key={index} />} );
  

// gestion de l'affichage de la list
let positionListTop = 40;
if(tagsSearching.length>0){
  positionListTop = 80;
}

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
            placeholder={"Press enter to add tag"}
            style={styles.input}
            onSubmitEditing={event =>{handleAddTag(event.nativeEvent.text)}}
          /> 
          <TouchableOpacity onPress={() =>  handleBtnSearch()} style={styles.btn}>
          {/* <Text><FontAwesome color="#ffffff" name="search" /></Text> */}
          <Text>🔎</Text>
          </TouchableOpacity>
      </View>
      {/* Affichage de la liste de proposition */}
      {showList && (
        <FlatList
          style={[styles.list, {top : positionListTop}]}
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
      // flexWrap: "wrap",
      // height: 80,
      width: "100%",
      // backgroundColor: 'red',
      alignItems : "center",
      justifyContent : "flex-start",
      marginTop : 0,
      paddingRight: 5,
    },

    tagsContainer :{
      flexDirection : "row",
      justifyContent : "flex-start",
      alignItems : "center",
      // backgroundColor : "green",
      width:"100%",
      // height:40,
      flexWrap : "wrap"
    },

    containerInput:{
        alignItems : "center",
        flexDirection : "row",
        // backgroundColor : "orange",
        width: "100%",
        height : 40,
        paddingRight : 15,
    },

    input:{
      backgroundColor: 'white',
      width: "80%",
      height : 35,
      marginLeft : "2%",
      borderRadius : 10,
      borderColor : tagColor,
      borderWidth:1,
      paddingLeft:5
    },

    btn:{
      backgroundColor : "lightgray",
      width:"15%",
      height:35,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:5,
    },

    list:{
       backgroundColor: '#e5ecf2',
        borderRadius: 5,
        flexWrap: "wrap",
        // zIndex :10,
        // top: 80,
        left: 0,
        position: "absolute",
        width : "90%",
        // shadowColor: '#00000099',
        // shadowOffset: {
        //   width: 0,
        //   height: 12
        // },
        // shadowOpacity: 0.8,
        // shadowRadius: 15.46,
        opacity: 0.9,
        elevation: 20
    },

    
});

export default TagSearchBar;