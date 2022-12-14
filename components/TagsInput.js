import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useState, useEffect } from 'react';


function TagsInput(props) {
    const [tags, setTags] = useState(props.tags);
    
    const removeTags = (indexToRemove) => {
        setTags([...tags.filter((elt, index) => index !== indexToRemove)]);
    };

    const addTags = (event) => {
        console.log('ici',event.nativeEvent.text)
        if (event.nativeEvent.text !== '') {
            setTags([...tags, event.nativeEvent.text]);
            props.selectedTags([...tags, event.nativeEvent.text]);
            event.nativeEvent.text = '';
        }
    };
    
    return (
            <View style={styles.tagsInput}>
                <View id="tags" style={styles.tagsList}>
                        {tags.map((tag, index) => (
                                <View key={index} style={styles.tag}>
                                <Text style={styles.tagTitle}>{tag}</Text>
                                <TouchableOpacity onPress={() => removeTags(index)} style={styles.tagCloseIcon}>
                                    <Text >x</Text>
                                </TouchableOpacity>
                                </View>
                            ))}
                </View>
                <TextInput
                    style={styles.tagsInputField}
                    onSubmitEditing={event =>{addTags(event)}}
                    placeholder="Press enter to add tags"
                />
            </View>
    );

}

const styles = StyleSheet.create({
    tagsInput: {
      backgroundColor : "white",
      height : 50,
      width: "80%",
      //flexDirection : "row",
      borderRadius : 5,
    },
    tagsList: {
      flexDirection : "row",
    },
    tag: {
        backgroundColor : "green",
        width: 80,
        height : "80%",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginRight:15,
        marginTop : 5,
        marginBottom : 5,
        paddingLeft: 5,
        borderRadius : 8,
    },
    tagTitle: {
        marginTop: 3,
        color : "white",
    },
    tagCloseIcon: {
        margin : 5,
        color : "white",
    },
    tagsInputField: {
      // Styles here...
    },
  });

export default TagsInput;