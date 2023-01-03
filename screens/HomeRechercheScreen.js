import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import TagSearchBar from "../components/TagSearchBar";
import ContactCard from "../components/ContactCard";

export default function HomeRechercheScreen({ route, navigation }) {
  
  const [contactsMatchAllTags, setContactsMatchAllTags] = useState(route.params.contactsMatchAllTags);
  const [contactsAnyTags, setContactsAnyTags] = useState(route.params.contactsAnyTags);
  const [searchingTags, setSearchingTags] = useState(route.params.searching);


// fonction gérant la navigation lorsqu'on presse sur un contact
const handleNavigateContactScreen = (theLastName, theFirstName) => {
  navigation.navigate("ContactsScreen", {
            lastName: theLastName,
            firstName: theFirstName,
           })
}
 
  // affichage dans le 1er container
  let DisplayTabA = <View><Text>Aucun contact ne correspond à votre recherche</Text></View>;
  if(contactsMatchAllTags.length>0){
    DisplayTabA = contactsMatchAllTags.map((Element, index) => {
      return (<ContactCard lastName = {Element.lastName} firstName = {Element.firstName} goToContactScreen={handleNavigateContactScreen} key={index}/>
      );
    });
  }


  // affichage dans le 2e container
  let DisplayTabB = <View><Text>Aucun contact ne correspond à votre recherche</Text></View>;
  if(contactsAnyTags.length>0){
    DisplayTabB = contactsAnyTags.map((Element, index) => {
      return ( <ContactCard lastName = {Element.contact.lastName} firstName = {Element.contact.firstName} goToContactScreen={handleNavigateContactScreen} key={index}/>
      );
    });
  }


  const layout = useWindowDimensions();
  const FirstRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabA}</View>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabB}</View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Tous les tags" },
    { key: "second", title: "Au moins un tag" },
  ]);
   
  return (
    <SafeAreaProvider style={styles.SAV}>
      <View style={[styles.header,{zIndex:1}]}><TagSearchBar  tagsSearching={searchingTags} /></View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    height: "100%",
  },
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  header:{
    marginTop : 25,
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
  param: {},

  btnContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 150,
    height: 80,
    alignItems: "stretch",
    textAlign: "right",
    marginLeft: 200,
  },
});
