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
import Tag from "../components/TagDelete"
import TagsDefinition from "../components/TagsDefinition";

export default function Brouillon() {
  const [modalVisible, setModalVisible] = useState(false);

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
      ><View style={styles.modalContainer}><TagsDefinition /></View>
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
    backgroundColor : "yellow",
    width: "90%",
    height: "90%",
    alignItems : "center",
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