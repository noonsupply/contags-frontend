import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { Entypo } from "@expo/vector-icons";

// la props correspondant à un objet tag
function Tag(props) {

    return (
        <View style={[
                    {width:props.size},
                    {backgroundColor: props.tag.color},
                    props.tag.border !== "none"? {borderWidth : 2} : {borderWidth : 0},
                    props.tag.border !== "none"? {borderColor : props.tag.border} : {borderColor : 'white'},
                    styles.form]}>
            <Text style={[
                        styles.tagText,
                        props.tag.color !== "white" && props.tag.color !== "#FFFFFF" ?{color : "#FFFFFF"} : {color : props.tag.border}]}>
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
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 7,
      },

      tagText: {
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