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
import { setAdress } from "../module/adressIP";

const backendAdress = setAdress();

export default function ExempleModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const contacts = useSelector((state) => state.contacts.value);
  const user = useSelector((state) => state.users.value);

  const handleCloseModal =() =>{
    setModalVisible(false);
  }

  const handleSave=() =>{

    fetch(`${backendAdress}/users/saveTagsPerso`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: "ucVDnAss2u-1outYzJ9oDSZyYrnuNE_Z",
        tagsPerso: user.tagsPerso,
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log("rep route : ",data)
      })
  }

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
                        // contact={contacts[1]}
                        // user={null}
      /></View>
      </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => handleSave() }
      >
        <Text style={styles.textStyle}>Save DB</Text>
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