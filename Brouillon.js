import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import TagsInput from './components/TagsInput';


import { useState, useEffect } from 'react';
import { addContact, addTags } from './reducers/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducers/contacts';

const store = configureStore({
   reducer: { contacts },
  });


// const TagsInput = props => {
//   const [tags, setTags] = React.useState(props.tags);
//   const removeTags = indexToRemove => {
//     setTags([...tags.filter((_, index) => index !== indexToRemove)]);
//   };
//   const addTags = event => {
//     if (event.nativeEvent.text !== '') {
//       setTags([...tags, event.nativeEvent.text]);
//       props.selectedTags([...tags, event.nativeEvent.text]);
//       event.nativeEvent.text = '';
//     }
//   };
//   return (
//     <View style={styles.tagsInput}>
//       <View id="tags" style={styles.tagsList}>
//         {tags.map((tag, index) => (
//           <View key={index} style={styles.tag}>
//             <Text style={styles.tagTitle}>{tag}</Text>
//             <TouchableOpacity
//               onPress={() => removeTags(index)}
//               style={styles.tagCloseIcon}
//             >
//               <Text>x</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//       <TextInput
//         style={styles.tagsInputField}
//         onSubmitEditing={addTags}
//         placeholder="Press enter to add tags"
//       />
//     </View>
//   );
// };


export default function App(){
  console.log('start');
  
  const handleSubmit = () => {
    useDispatch(addContact());
  };
 
  

  const selectedTags = tags => {
    console.log(tags);
  };

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <TagsInput selectedTags={selectedTags} tags={['Nodejs', 'MongoDB']} /> 
    </View>
    <TouchableOpacity onPress={() => handleSubmit()} style={styles.button} activeOpacity={0.8}>
            <Text style={styles.textButton}>Go to gallery</Text>
          </TouchableOpacity>
    </Provider>
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
  button :{
    height : 100,
  }
});
