import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { Entypo } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


// la props contiendra le lastName, le firstName du contact à afficher, ainsi qu'une fonction permettant de naviguer vers la page ContactScreen
function ContactCard(props) {

    return (
        <View style={styles.container} >
        <TouchableOpacity
            style={styles.case}
            onPress={() => props.goToContactScreen(props.lastName, props.firstName) }
        >
            <View style={styles.caseIcon}>
                <FontAwesome name="user-circle" size={35} color="#0046CF" />
            </View>
            <Text style={styles.name}>
                {props.lastName} {props.firstName}
            </Text>
                <TouchableOpacity style={styles.param}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
      },
      case: {
        borderColor: "#222222",
        borderWidth: 0.5,
        borderRadius: 5,
        height: 50,
        width: 350,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      caseIcon: {
        borderRadius: 70,
        marginLeft: 10,
      },
      icon: {
        marginLeft: 5,
      },
      name: {
        width: 200,
        marginRight: 40,
      },

})

export default ContactCard;