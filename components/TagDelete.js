import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// la props contient un objet tag et une fonction handleDeleteTag qui sert à supprimer le tag
function TagDelete(props) {
  const handleDelete = () => {
    props.handleDeleteTag(props.tag);
  };

  // gestion de la taille du tag le *10 vient de la police et de la fontsize
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
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
  },

  form: {
    zIndex: 0,
    alignItems: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  iconDelete: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    marginLeft: -10,
    marginTop: -5,
    backgroundColor: "white",
    height: 17,
    width: 17,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
  },

  tagText: {
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
