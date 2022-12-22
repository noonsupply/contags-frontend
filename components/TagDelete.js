import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// la props contient un objet tag et une fonction handleDeleteTag qui sert à supprimer le tag
function TagDelete(props) {
  const handleDelete = () => {
    props.handleDeleteTag(props.tag);
  };

  // gestion de la taille du tag le *10 vient de la police et de la fontsize
  let theWidth=102;
  if(props.tag.title){
    theWidth = props.tag.title.length*10;
  }
    return (
          <View style = {[styles.container,
                          {width: theWidth}]}>
            <View style={[
                    {backgroundColor: props.tag.color},
                    props.tag.border !== "none"? {borderWidth : 2} : {borderWidth : 0},
                    props.tag.border !== "none"? {borderColor : props.tag.border} : {borderColor : "#FFFFFF"},
                    styles.form]}>
                <Text style={[
                        styles.tagText,
                        props.tag.color !== "white" && props.tag.color !== "#FFFFFF"?{color : "#FFFFFF"} : {color : props.tag.border}]}>
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
  // let theWidth = 102;
  // if (props.tag.title) {
  //   theWidth = props.tag.title.length * 10;
  // }
  return (
    <View
      style={[
        styles.container,
        //  { width: theWidth }
      ]}
    >
      <View
        style={[
          { backgroundColor: props.tag.color },
          props.tag.border !== "none" ? { borderWidth: 2 } : { borderWidth: 0 },
          props.tag.border !== "none"
            ? { borderColor: props.tag.border }
            : { borderColor: "#FFFFFF" },
          styles.form,
        ]}
      >
        <Text
          style={[
            styles.tagText,
            props.tag.color !== "white" && props.tag.color !== "#FFFFFF"
              ? { color: "#FFFFFF" }
              : { color: props.tag.border },
          ]}
        >
          {props.tag.title || "Nom du tag"}
        </Text>
      </View>

      <View style={styles.iconDeleteContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleDelete()}
          style={styles.iconDelete}
        >
          {/* <Entypo name="cross" size={15} color= "#0031B8" /> */}
          <Entypo name="circle-with-cross" size={15} color="#D90000" />
          {/* <Entypo name="circle-with-cross" size={24} color="blue" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 5,
    // marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
    // justifyContent: "flex-end",
    // alignItems: "flex-start",
    // height: 30,

  },

  form: {
    zIndex: 0,
    // position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    justifyContent: "center",
    // marginBottom: 8,
    // marginLeft: 0,
    // marginRight: 0,
    // marginTop: 0,
    // marginBottom : 0,
    // paddingLeft: 12,
    // paddingRight: 12,
    // width:"100%",
    //backgroundColor : "#D90000", //props.tag.color ,
    // alignItems: "center",
    // borderRadius: 20,
    // flexShrink: 1,
    // height: 30,
    // justifyContent: "center",
    // marginHorizontal: 5,
    // marginVertical: 5,
    paddingHorizontal: 10,
  },

  // iconDeleteContainer: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  iconDelete: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    marginLeft: -10,
    marginTop: -5,
    // marginRight: 0,
    // marginTop: 0,
    // marginBottom: 0,
    backgroundColor: "white",
    // borderRadius: 50,
    // paddingLeft: 0,
    // paddingBottom: 0,
    // paddingRight: 0,
    // paddingTop: 0,
    height: 15,
    width: 15,
    borderRadius: 15,
  },

  tagText: {
    //color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  withBorder: {
    borderWidth: 2,
    borderColor: "#0031B8",
  },

  withoutBorder: {
    borderWidth: 0,
  },
});

export default TagDelete;
