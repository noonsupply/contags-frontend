import React from "react";
import {
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesomeIcon from '@expo/vector-icons'
import { Entypo } from "@expo/vector-icons";
//import 'font-awesome/css/font-awesome.min.css'
import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTags } from "../reducers/contacts";
import { updateTagsPerso } from "../reducers/users";

import TagDelete from "./TagDelete";
import Tag from "./Tag";

const writeColor = "#0031B8"
const theColors = {blueOne : "#2FBAE5", blueTwo :"#2F6DE5", green : "#21AC14", orange : "#E5712F", yellow : "#EDC808", red : "#D90000", pink : "#E52F92", purple : "#952FE5" }


// la props contient :
//                     une fonction handleCloseModal qui permet de fermer la modal contenant ce composant
//                     un objet user qui prend null si non concerné
//                     un objet contact qui prend null si non concerné
function TagsDefinition(props) {
    const [inputTag, setInputTag] = useState("");
    const [listTags, setListTags] = useState([]);

    const dispatch = useDispatch();

    // fonctions gérant le click sur les couleurs
    const handlePressColor= (colorClick) => {
        setListTags([...listTags,{title :inputTag.trim(), color : colorClick  , border :"none"}]); //.trim() permet d'éviter les espaces ajouter par inadvertance
        setInputTag("");
    };

    const handlePressColorBlank= () => {
        setListTags([...listTags,{title :inputTag.trim(), color : "white", border:"#0031B8"}]);
        setInputTag("");
    };

    //  fonction gérant la fermeture en cliquant sur la croix
    const handleClose= () => {
        setListTags([]);
        setInputTag("");
        props.handleCloseModal();
    };

    // fonction gérant la validation des tags
    const handleValidate= () => {
        // on enregistre dans le bon reducer
        if(props.user !== null || props.user=== undefined){
            dispatch(updateTagsPerso({tagsPerso: listTags}));
        }
        if(props.contact !== null || props.contact === undefined){
            dispatch(updateTags({contact : props.contact, tags: listTags}));
        }
        
        props.handleCloseModal();
    };


    // fonction permettant de supprimer un tag de listTags (donc de l'affichage)
    const handleDeleteTag =(oneTag) => {
        const newTagsList = listTags.filter(eltTag => eltTag.title !== oneTag.title);
        setListTags(newTagsList);
    };

    // affichage des tags à choisir
    const tagsChoiceDisplay = Object.keys(theColors).map((keyColor,index)=>{
        return (<TouchableOpacity activeOpacity={0.8} style = {{width : "50%", justifyContent : "center"}} onPress={() => handlePressColor(theColors[keyColor])}>
                    <Tag tag= {{title : inputTag, color : theColors[keyColor], border:"none"}} key={index}/>
                </TouchableOpacity>)
    })
    tagsChoiceDisplay.unshift(<TouchableOpacity activeOpacity={0.8} style = {{width : "50%"}} onPress={() => handlePressColorBlank()}>
                                <Tag tag= {{title : inputTag, color : "white", border:"#0031B8"}} key = {50} /></TouchableOpacity>)

    // affichage des tags crées
    let tagValidateDisplay = <View><Text style={{color : writeColor}} key={0}>Pas de tag crée pour l'instant</Text></View>
    if(listTags.length>0){
        tagValidateDisplay = listTags.map((eltTag, index)=> {
            return (<TagDelete tag= {eltTag} key={index} handleDeleteTag={handleDeleteTag}/>)
        })
    } 

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.closeContainer}>
            <Text style={styles.titles}>C'est parti pour rajouter des tags au contact :</Text><View style={styles.closeIcon} >
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleClose()}>
                <Entypo name="cross" size={25} color= {writeColor} />
                </TouchableOpacity>
                </View>
            </View>
            {/* ETAPE 1 */}
            <View style={styles.firstContainer}>
                <Text style={styles.titles}>Étape 1 : choisir un nom</Text>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={"Nom du tag"}
                    maxLength={10}
                    onChangeText={(value) => setInputTag(value)}
                    value={inputTag}
                ></TextInput>
                <Text>{inputTag.length}/10</Text>
                </View>      
            </View>
          {/* ETAPE 2 */}
            <View style={styles.secondContainer} >
                <Text style={styles.titles}>Étape 2 : choisir une couleur</Text>
                    <View style={styles.tagContainer}>
                        {tagsChoiceDisplay}
                    </View>
            </View>
          {/* ETAPE 3 */}
            <View style={styles.visualContainer}>
                <Text style={styles.titles}>Étape 3 : visualiser les tags crées</Text>
                <ScrollView  style={styles.ScrollView}>
                    <View style={styles.validateTagContainer}>
                        {tagValidateDisplay}
                    </View> 
                </ScrollView>
            </View >
          {/* BOUTON VALIDER */}
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnBack} activeOpacity={0.8} onPress={() => handleValidate()}>
                <Text style={{color : writeColor }}>Valider</Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView >
        
    );
  }

const styles = StyleSheet.create({

    container: {
      //flex: 1,
        height: "100%",
        width: "90%",
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding : 5,
    },

    titles: {
        color : "#0031B8",
        fontSize : 16,
        marginTop : 0,
        marginBottom : 0,
    },


    // TOP
    closeContainer:{
        width:"100%",
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        marginBottom : 0,
        marginLeft:5,
        paddingRight : 5,
    },

    closeIcon : {
        marginleft : 15,
        paddingRight:5,
    },
   
    //  ETAPE 1
    firstContainer:{
        width:"100%",
        marginTop : 5,
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

  //   ETAPE 2 : TAGS
    secondContainer: {
        height: "45%",
    },

    tagContainer: {
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginBottom: 0,
        marginTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    
    // ETAPE 3 
    visualContainer: {
        height : "25%",
        width : "100%",
    },

    ScrollView:{
       height : 100,
       flex : 1,
       marginTop : 5,
    },
  
    validateTagContainer: {
        flexDirection : "row",
        width : "100%",
        flexWrap: "wrap",
    },

  
  //   BOUTON
    containerBtn: {
        width:"100%",
        justifyContent : "flex-end",
        alignItems : "flex-end",
        paddingTop : 5,
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
    },
  
  });

  export default TagsDefinition;