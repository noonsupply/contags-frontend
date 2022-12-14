import React from "react";
import {
    TextInput,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from '@expo/vector-icons'
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState } from "react";

export default function Brouillon() {
    const [tag, setTag] = useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.closeContainer}>
            <View><Entypo name="cross" size={25} color="#0031B8" /></View>
        </View>
        <View><Text style={styles.titles}>C'est parti pour rajouter des tags au contact :</Text></View>
        {/* ETAPE 1 */}
        <View style={styles.firstContainer}>
            <Text style={styles.titles}>Étape 1 : choisir un nom</Text>
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={"Nom du tag"}
                onChangeText={(value) => setTag(value)}
                value={tag}
            ></TextInput>
            <Text>{tag.length}/10</Text>
            </View>      
        </View>
        {/* ETAPE 2 */}
        <View>
            <Text style={styles.titles}>Étape 2 : choisir une couleur</Text>
                <View style={styles.tagContainer}>
                <TouchableOpacity style={[styles.tagFull, styles.tagBlank]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagBlueOne]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagGreen]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagOrange]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagYellow]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagRed]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagBlueTwo]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagPink]} activeOpacity={0.8}></TouchableOpacity> 
                    <TouchableOpacity style={[styles.tagFull, styles.tagPurple]} activeOpacity={0.8}></TouchableOpacity>                 
                </View>
        </View>
        {/* ETAPE 3 */}
        <View style={styles.visualContainer}>
            <Text style={styles.titles}>Étape 3 : visualiser les tags crées</Text>
            <ScrollView  style={styles.ScrollView}>
                <View style={styles.validateTagContainer}>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                    <View style={[styles.tagFinalBlank, styles.tagBlank]}>
                        <Text style={styles.tagTextBlank}>{tag || "Nom du tag"}</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
        {/* BOUTON VALIDER */}
        <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnBack} activeOpacity={0.8}>
            <Text style={styles.btnText}>Valider</Text>
            </TouchableOpacity> 
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    //flex: 1,
    height: 550,
    width: "80%",
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding : 5,
  },

  closeContainer:{
    width:"100%",
    flexDirection : "row",
    justifyContent : "flex-end",
    alignItems : "center",
    marginBottom : 0,
  },

  titles: {
    color : "#0031B8",
    fontSize : 16,
    marginTop : 0,
    marginBottom : 0,
    //fontFamily : "Poppins",
  },
  btnBack:{
    border: 1,
    borderRadius: 4,
    width: 102,
    height: 36,
  },
  firstContainer:{
    width:"100%",
  },
  inputContainer:{
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-around",
    marginTop : 10,
    marginBottom : 10,
  },
  input:{
    width : "80%",
    height: 30,
    borderRadius: 100,
    paddingLeft: 5,
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1.5,
  },
//   TAGS
  tagContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },

  tagText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tagTextBlank: {
    color: "#0031B8",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  
  tagFull: {
    alignItems: "center",
    borderRadius: 50,
    fontSize: 12,
    flexShrink: 1,
    height: 50,
    width: 50,
    justifyContent: "flex-end",
    marginBottom: 4,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },
  
  tagBlank :{
    borderWidth : 2,
    borderColor : "#0031B8",
  },

  tagBlueOne :{
    backgroundColor : "#2FBAE5",
  },
  
  tagGreen : {
    backgroundColor : "#21AC14" ,
  },

  tagOrange: {
    backgroundColor : "#E5712F" ,
  },
 
  tagYellow: {
    backgroundColor : "#EDC808" ,
  },

  tagRed:{
    backgroundColor : "#D90000" ,
  },

  tagBlueTwo: {
    backgroundColor : "#2F6DE5" ,
  },

  tagPink:  {
    backgroundColor : "#E52F92" ,
  },

  tagPurple: {
    backgroundColor : "#952FE5" ,
  },

  visualContainer: {
    height : "25%",
    width : "100%",
  },

  validateTagContainer: {
    flexDirection : "row",
    width : "100%",
    flexWrap: "wrap",
  },

  tagFinal: {
    alignItems: "center",
    borderRadius: 20,
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    width : 110,
    justifyContent: "flex-end",
    // marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom : 5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
  },

  tagFinalBlank: {
    alignItems: "center",
    borderRadius: 20,
    fontSize: 12,
    flexShrink: 1,
    height: 35,
    width : 110,
    justifyContent: "flex-end",
    // marginBottom: 8,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom : 5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
    borderWidth : 2,
    borderColor : "#0031B8",
  },

//   BOUTON
  containerBtn: {
    width:"100%",
    justifyContent : "flex-end",
    alignItems : "flex-end",
  },

  btnBack: {
    borderWidth : 2,
    borderColor : "#0031B8",
    borderRadius: 10,
    width : 80,
    height : 30,
    justifyContent : "center",
    alignItems : "center",
    marginRight : 10,
    marginTop : 10,
  },

   btnText: {
    color : "#0031B8",
   }

});