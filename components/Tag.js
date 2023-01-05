import { View, Text} from 'react-native';
import { styles } from "../assets/Style";


// la props correspondant à un objet tag
function Tag(props) {

    return (
        <View style={[
                    {width:props.size},
                    {backgroundColor: props.tag.color},
                    props.tag.border !== "none"? {borderWidth : 2} : {borderWidth : 0},
                    props.tag.border !== "none"? {borderColor : props.tag.border} : {borderColor : 'white'},
                    styles.tagForm]}>
            <Text style={[
                        styles.tagText,
                        props.tag.color !== "white" && props.tag.color !== "#FFFFFF" ?{color : "#FFFFFF"} : {color : props.tag.border}]}>
            {props.tag.title || "Nom du tag"}
            </Text>
         </View>
    );

} 

export default Tag;