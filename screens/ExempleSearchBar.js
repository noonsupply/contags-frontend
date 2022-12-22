import React from "react";
import {
    TextInput,
    SafeAreaView,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
} from 'react-native';
//import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TagsDefinition from "../components/TagsDefinition";
import TagSearchBar from "../components/TagSearchBar";

import { setContact} from "../reducers/contacts";

import { searchTagInArray,  searchAllTagsInArray, getContactsWithTagsSearching, theContacts} from "../module/toolsSearchBar";

export default function ExempleSearchBar() {
  const [tagsSelected, setTagsSelected] = useState([]);
  // const [dataSet, setDataSet] = useState([
  //   { title: "Star Wars", color: "red", border: "none" },
  //   { title: "voyages", color: "blue", border: "none" },
  // ]);

  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(setContact(theContacts()));
  }, []);

  const contacts = useSelector((state) => state.contacts.value);

  const searchTags = (query) => {
    // Prevent search with an empty query
    if (query === "") {
      return;
    }
  };

  // console.log("les contacts", contacts)
// const repAll =  getContactsWithTagsSearching([{title : "famille"}, {title : "concert"}], contacts).contactsMatchAllTags;
// const rep =  getContactsWithTagsSearching([{title : "famille"}, {title : "concert"}], contacts).contactsAnyTags;
// for(let item of rep){
//   console.log("contact" , item.contact.tags);
//   console.log("tags", item.tags)
// }

  return (
    <SafeAreaView style={styles.container}>
      {/* <AutocompleteDropdown
        // onChangeText={(value) => searchTags(value)}
        onSelectItem={(item) => item && setTagsSelected([...tagsSelected, item])}
        dataSet={dataSet}
        textInputProps={{ placeholder: 'Tags' }}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.dropdownContainer}
        suggestionsListContainerStyle={styles.suggestionListContainer}
        closeOnSubmit
      /> */}
      <TagSearchBar />
      
      <View style={styles.v}><Text style={styles.tt}>ceci est un essai 1</Text>
      <Text style={styles.tt}>ceci est un essai 2</Text>
      <Text style={styles.tt}>ceci est un essai 3</Text>
      <Text style={styles.tt}>ceci est un essai 4</Text></View>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "90%",
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop : 20,
  },
  v :{
    zIndex : 0,
  },


  tt: {
    
    fontSize: 20
  },
});
