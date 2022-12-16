import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { Entypo } from "@expo/vector-icons";

// la props correspondant à un objet tag
function Tag(props) {
    if(props.tag.border !== "none"){

    }
    return (
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
    );

}

const styles = StyleSheet.create({
    form: {
        alignItems: "center",
        borderRadius: 20,
        flexShrink: 1,
        height: 30,
        // width : 110,
        justifyContent: "center",
        // marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 7,
        marginBottom : 7,
        paddingLeft: 12,
        paddingRight: 12,
        //backgroundColor : "#D90000", //props.tag.color ,
        flexDirection : "row",
        justifyContent : "center",
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
  

export default Tag;