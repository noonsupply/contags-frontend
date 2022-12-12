import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Pressable,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Contacts from 'expo-contacts';


export default function HomeLoadContact() {

const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
              
            });
      
            if (data.length > 0) {
              const contact = data[0];
              console.log(data);
            }
          }
        })();
      }, []);

  return (
<TouchableOpacity onPress={() => console.log('Button pressed!')}>
  <Text>Press me!</Text>
</TouchableOpacity>
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
