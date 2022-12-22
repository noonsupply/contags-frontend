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

export default function HomeRechercheScreen({ route, navigation }) {
  
  const [contactsMatchAllTags, setContactsMatchAllTags] = useState(route.params.contactsMatchAllTags);
  const [contactsAnyTags, setContactsAnyTags] = useState(route.params.contactsAnyTags);
  const [searchingTags, setSearchingTags] = useState(route.params.searching);

console.log(route.params);
// récupération des données de la page précédente
// useEffect(() => {


// }, []);
 
  // affichage dans le 1er container
  const DisplayTabA = contactsMatchAllTags.map((Element, index) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity
          style={styles.case}
          onPress={() =>
            navigation.navigate("ContactScreen", {
              lastName: data.lastName,
              firstName: data.firstName,
              /* dob: data.dob, phonenr: tableauPhone, email : email, */ key: key,
            })
          }
        >
          <View style={styles.caseIcon}>
            <FontAwesome name="user-circle" size={35} color="#0031B8" />
          </View>
          <Text style={styles.name}>
            {Element.lastName} {Element.firstName}
          </Text>
          <TouchableOpacity style={styles.param}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  });

  // affichage dans le 2e container
  const DisplayTabB = route.params.contactsAnyTags.map((Element, index) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity
          style={styles.case}
          onPress={() =>
            navigation.navigate("ContactScreen", {
              lastName: Element.contact.lastName,
              firstName: Element.contact.firstName,
              /* dob: data.dob, phonenr: tableauPhone, email : email, */ key: key,
            })
          }
        >
          <View style={styles.caseIcon}>
            <FontAwesome name="user-circle" size={35} color="#0031B8" />
          </View>
          <Text style={styles.name}>
            {Element.contact.lastName} {Element.contact.firstName}
          </Text>
          <TouchableOpacity style={styles.param}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  });

  const layout = useWindowDimensions();
  const FirstRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabA}</View>
      {/* <View style={styles.contactContainer}>{DisplayTabA}</View> */}
      {/* <View style={styles.btnContainer}></View> */}
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabB}</View>
      {/* <View style={styles.contactContainer}>{DisplayTabB}</View> */}
      {/* <View style={styles.btnContainer}></View> */}
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
      // style={[{zIndex:0}]}
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
