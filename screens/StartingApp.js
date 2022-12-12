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


export default function StartingApp() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logoWhite.png')}></Image>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: 'center',
    backgroundColor: '#0031B8'
  },

  logo: {
    width : "100%",
    height: "20%",
    flex:0.1,
    display: "flex",
    marginTop: "35%"
  }
});
