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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from '@expo/vector-icons'
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState } from "react";
import { useSelector } from 'react-redux';

import TagsDefinition from "../components/TagsDefinition";
import TagSearchBar from "../components/TagSearchBar";

export default function ExempleSearchBar() {
    const [tagsSelected, setTagsSelected] = useState([]);
    const [dataSet, setDataSet] = useState([{"title":"Star Wars","color":"red","border":"none"},{"title":"voyages","color":"blue","border":"none"}]);

    const searchTags = (query) => {
            // Prevent search with an empty query
            if (query === '') {
                return;
            }

  };

return(<View style={styles.container}>
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
      <Text style={styles.tt}>ceci est un essai 1</Text>
      <Text style={styles.tt}>ceci est un essai 2</Text>
      <Text style={styles.tt}>ceci est un essai 3</Text>
      <Text style={styles.tt}>ceci est un essai 4</Text>

</View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: 'blue',
        alignItems : "center",
        justifyContent : "center"
      },

      tt:{
        fontSize : 20,
        // zIndex : 0,
        // position: "absolute",
      },
});