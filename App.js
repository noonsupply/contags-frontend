import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TagsInput = props => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = event => {
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
            <TouchableOpacity
              onPress={() => removeTags(index)}
              style={styles.tagCloseIcon}
            >
              <Text>x</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.tagsInputField}
        onSubmitEditing={addTags}
        placeholder="Press enter to add tags"
      />
    </View>
  );
};


export default function App(){
  const selectedTags = tags => {
    console.log(tags);
  };
  return (
    <View style={styles.container}>
      <TagsInput selectedTags={selectedTags} tags={['Nodejs', 'MongoDB']} />
    </View>
  )
};   





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%",
  },
  tagsInput: {
    backgroundColor : "white",
    height : "10%",
    width: "80%",
  },
  tagsList: {
    flexDirection : "row",
  },
  tag: {
    backgroundColor : "green",
    width: 80,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    marginRight:15,
    paddingLeft: 5,
    borderRadius : 8,
  },
  tagTitle: {
    marginTop: 3,

  },
  tagCloseIcon: {
    margin : 5,
  },
  tagsInputField: {
    // Styles here...
  },
});
