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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from '@expo/vector-icons'
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState } from "react";
import { useSelector } from 'react-redux';

import TagsDefinition from "../components/TagsDefinition";

export default function ExempleModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const contacts = useSelector((state) => state.contacts.value);
  const users = useSelector((state) => state.users.value);

  const handleCloseModal =() =>{
    setModalVisible(false);
  }
  
  console.log('tags', contacts[2].tags)
  return (
    <View style={styles.container}>
        {/* <TagsDefinition /> */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ><View style={styles.modalContainer}>
        <TagsDefinition handleCloseModal={handleCloseModal} 
                        contact={{"name":"Patulacci","firstName":"Yannick","emails":[{type : 'personnal', email : "Yannick@gmail.com" }],"phones": [{type : 'mobile', number :"0714861783"}],"birthday":"2022-12-12T11:18:57.844Z","tags":[],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":12,"emailCounter":6}}}
                        user={null}
      /></View>
      </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: 'blue',
    padding : 5,
    alignItems : "center",
    justifyContent : "center"
  },

  modalContainer: {
    width: "90%",
    height: "95%",
    alignItems : "center",
    marginTop:10,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
 

});