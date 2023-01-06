import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { styles } from "../assets/Style";

// la props contient un objet tag et une fonction handleDeleteTag qui sert à supprimer le tag
function TagDelete(props) {

  // fonction se déclenchant quand on presse l'icône x
  const handleDelete = () => {
    props.handleDeleteTag(props.tag);
  };

  return (
    <View
      style={[
        styles.container,
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
          <Entypo name="circle-with-cross" size={15} color="#EF2637" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TagDelete;


