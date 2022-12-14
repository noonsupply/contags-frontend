import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from '@expo/vector-icons'
//import 'font-awesome/css/font-awesome.min.css'
import TagsInput from '../components/TagsInput';


export default function Brouillon() {
  

  return (
    <SafeAreaView style={styles.container}>
        <View><Text>x</Text></View>
        <View><Text style={styles.titles}>C'est parti pour rajouter des tags au contact :</Text></View>
        {/* ETAPE 1 */}
        <View>
            <Text style={styles.titles}>Étape 1 : choisir un nom</Text>
            <TagsInput tags={[]}></TagsInput>
        </View>
        {/* ETAPE 2 */}
        <View>
            <Text style={styles.titles}>Étape 2 : choisir une couleur</Text>
        </View>
        {/* ETAPE 3 */}
        <View>
            <Text style={styles.titles}>Étape 3 : visualiser les tags crées</Text>
        </View>
        <TouchableOpacity style={styles.btnBack}>
              <Text>Valider</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    //flex: 1,
    height: "80%",
    width: "80%",
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding : 5,
  },

  logo: {
    width : "100%",
    height: "20%",
    flex:0.1,
    display: "flex",
    marginTop: "35%"
  },
  titles: {
    color : "#0031B8",
    fontSize : 16,
    //fontFamily : "Poppins",
  },
  btnBack:{
    border: 1,
    borderRadius: 4,
    width: 102,
    height: 36,
  }
});
