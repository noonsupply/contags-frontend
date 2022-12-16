import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { Entypo } from "@expo/vector-icons";



// la props contient un objet tag et une fonction handleDeleteTag qui sert à supprimer le tag
function TagDelete(props) {

  
  const handleDelete =() => {
      props.handleDeleteTag(props.tag);
  };


    return (
          <View style = {styles.container}>
            <View style={[
                    {backgroundColor: props.tag.color},
                    props.tag.border !== "none"? {borderWidth : 2} : {borderWidth : 0},
                    props.tag.border !== "none"? {borderColor : props.tag.border} : {borderColor : 'white'},
                    styles.form]}>
                <Text style={[
                        styles.tagText,
                        props.tag.color !== "white"?{color : "#FFFFFF"} : {color : props.tag.border}]}>
                        {props.tag.title || "Nom du tag"}
                </Text>
                
          </View>
          <View style={styles.iconDeleteContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleDelete()} style={styles.iconDelete}>
              {/* <Entypo name="cross" size={15} color= "#0031B8" /> */}
              <Entypo name="circle-with-cross" size={15} color="blue"  />
          </TouchableOpacity>
          </View>         
    </View>
    );

}

const styles = StyleSheet.create({
    container :{
      marginTop : 5,
      marginBottom : 5,
      marginLeft : 10,
      marginRight : 10,
      flexDirection : "row",
      justifyContent : "flex-end",
      alignItems : "flex-start",
      height: 30,
      width:102,
    },

    form: {
        zIndex : 0,
        position: "absolute",
        alignItems: "center",
        borderRadius: 20,
        flexShrink: 1,
        height: 30,
        justifyContent: "center",
        // marginBottom: 8,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom : 0,
        paddingLeft: 12,
        paddingRight: 12,
        width:"100%",
        //backgroundColor : "#D90000", //props.tag.color ,
      },

      iconDelete:{
        zIndex : 1,
        marginLeft:0,
        marginRight : 0,
        marginTop:0,
        marginBottom:0,
        backgroundColor : "white",
        borderRadius : 50,
        paddingLeft:0,
        paddingBottom :0,
        paddingRight:0,
        paddingTop:0,
      },

      tagText: {
        //color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
      },

      withBorder:{
        borderWidth : 2,
        borderColor : "#0031B8",
      },

      withoutBorder :{
        borderWidth : 0,
      }
  });
  

export default TagDelete;